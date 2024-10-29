import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomizer(hexLength) {
    return Math.floor(Math.random() * hexLength);
  }
  const handleHexGenerator = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomizer(hex.length)];
    }
    setColor(hexColor);
    // setTypeOfColor("hex");
  };

  const handleRgbGenerator = () => {
    const r = randomizer(256);
    const g = randomizer(256);
    const b = randomizer(256);
    // setTypeOfColor("rgb");
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") {
      handleHexGenerator();
    } else {
      handleRgbGenerator();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Assign Hex</button>
      <button onClick={() => setTypeOfColor("rgb")}>Assign RGB</button>
      <button
        onClick={() =>
          typeOfColor === "hex" ? handleHexGenerator() : handleRgbGenerator()
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          flexDirection: "column",
        }}
      >
        {typeOfColor}
        <h3>{color}</h3>
      </div>
    </div>
  );
}
