import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutside() {
  const [showContent, setShowContent] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="flex flex-col items-center mt-10">
      {showContent ? (
        <div ref={ref} className="border-2 border-solid h-[100px] w-[500px]">
          <h1>HELLOOOO!!!</h1>
          <p>Click outside to close this :)</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
