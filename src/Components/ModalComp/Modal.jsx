/* eslint-disable react/prop-types */
import "./modal.css";

export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>Body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : "Footer"}</div>
      </div>
    </div>
  );
}
