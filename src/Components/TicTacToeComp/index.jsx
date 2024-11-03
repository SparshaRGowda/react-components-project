import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="border-[1px] border-solid border-red-500 float-left text-4xl text-black h-[100px] p-0 text-center w-[100px] mr-[-1px] mt-[-1px]"
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xTurn, setXTurn] = useState(true);
  const [status, setSatus] = useState("");

  function handleClick(selectedSquare) {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[selectedSquare]) return; //if there is a winner OR already that square is selected, do nothing
    copySquares[selectedSquare] = xTurn ? "X" : "O";
    setSquares(copySquares);
    setXTurn(!xTurn);
  }

  function getWinner(squares) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setSatus("This is draw. Restart?");
    } else if (getWinner(squares)) {
      setSatus(`${getWinner(squares)} is the winner`);
    } else {
      setSatus(`next player is- ${xTurn ? "X" : "O"}`);
    }
  }, [squares, xTurn]);

  function handleRestart() {
    setSquares(Array(9).fill(""));
    setXTurn(true);
  }

  return (
    <div className="flex flex-col items-center mt-[100px]">
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
