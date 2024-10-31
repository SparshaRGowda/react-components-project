import { useState } from "react";
import "./tabs.css";
/* eslint-disable react/prop-types */
export default function Tab({ tabContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(null);

  function setIndex(currentIndex) {
    setCurrentTabIndex(currentIndex);
    onChange(currentIndex);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabContent.map((item, index) => (
          <>
            <div
              className={`tab-item ${
                currentTabIndex === index ? "active" : ""
              }`}
              key={index}
              onClick={() => setIndex(index)}
            >
              <span>{item.label}</span>
            </div>
          </>
        ))}
      </div>

      <div className="content">
        {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
      </div>
    </div>
  );
}
