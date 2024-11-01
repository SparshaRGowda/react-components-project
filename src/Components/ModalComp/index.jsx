import { useState } from "react";
import Modal from "./Modal";

export default function ModalComponent() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }
  function onClose() {
    setOpen(false);
  }
  return (
    <div>
      <button onClick={handleClick}>Open Modal</button>
      {open && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
}
