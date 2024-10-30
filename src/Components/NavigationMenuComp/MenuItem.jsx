import { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus, FaMinus } from "react-icons/fa";

/* eslint-disable react/prop-types */
export default function MenuItem({ item }) {
  const [display, setDisplay] = useState({});

  function handleToggle(currentLabel) {
    setDisplay({ ...display, [currentLabel]: !display[currentLabel] });
  }
  console.log(display);
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        gap: "20px",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <p style={{ fontSize: "25px" }}>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span
            onClick={() => {
              handleToggle(item.label);
            }}
          >
            {display[item.label] ? (
              <FaMinus color="white" size={25} />
            ) : (
              <FaPlus color="white" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      display[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
