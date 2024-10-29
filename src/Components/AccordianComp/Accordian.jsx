import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [openItem, setOpenItem] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [getMultipleItems, setGetMultipleItems] = useState([]);

  function handleOpenSingle(getId) {
    setOpenItem(getId === openItem ? null : getId);
  }

  function handleOpenMultiple(getId) {
    let copyMultipleItems = [...getMultipleItems];
    const findIndexOfId = copyMultipleItems.indexOf(getId);
    if (findIndexOfId === -1) {
      copyMultipleItems.push(getId);
    } else {
      copyMultipleItems.splice(findIndexOfId, 1);
    }
    setGetMultipleItems(copyMultipleItems);
  }

  return (
    <div className="wrapper">
      <button
        className="multiselect"
        onClick={() => setEnableMultiSelect(!enableMultiSelect)}
      >
        {enableMultiSelect ? "Disable Multi-select" : "Enable Multi-select"}
      </button>
      <div className="accordian">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                className="title"
                onClick={() =>
                  enableMultiSelect
                    ? handleOpenMultiple(item.id)
                    : handleOpenSingle(item.id)
                }
              >
                <h1>{item.question}</h1>
                <span>+</span>
              </div>
              {openItem === item.id ||
              (enableMultiSelect &&
                getMultipleItems.indexOf(item.id) !== -1) ? (
                <div className="answer">
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
}
