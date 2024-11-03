import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    const handleListener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", handleListener);
    document.addEventListener("touchstart", handleListener);

    return () => {
      document.removeEventListener("mousedown", handleListener);
      document.removeEventListener("touchstart", handleListener);
    };
  }, [ref, handler]);
}
