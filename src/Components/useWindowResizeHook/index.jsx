import { useLayoutEffect, useState } from "react";

export default function UseWindowResize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  // useEffect is called whenever DOM elements are renedered but useLayout is called before that.
  useLayoutEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
}
