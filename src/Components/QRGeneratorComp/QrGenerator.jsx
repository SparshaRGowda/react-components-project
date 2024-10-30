import { useState } from "react";
import QRCode from "react-qr-code";

//npm i react-qr-code
export default function QrGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleGenerate() {
    setQrCode(inputValue);
    setInputValue("");
  }
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        top: "0",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>QR Code Generator</h1>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
      />
      <button onClick={handleGenerate}>Generate</button>
      <QRCode id="qr-id" value={qrCode} />
    </div>
  );
}
