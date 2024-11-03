import { useRef } from "react";

export default function ScrollToSection() {
  const sectionRef = useRef(null);

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "purple",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "Sixth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
      },
    },
  ];

  function handleScroll() {
    const position = sectionRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>Scroll to Section</h1>
      <button
        onClick={handleScroll}
        className="border-2 border-black bg-slate-500 p-1"
      >
        Click to Scroll
      </button>
      {data.map((item, index) => (
        <div
          ref={index === 3 ? sectionRef : null}
          key={index}
          style={item.style}
        >
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
}
