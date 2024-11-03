import { useRef } from "react";
import useFetch from "../useFetchCustomHook";

export default function ScrollTopBottom() {
  const { data, loading, error, fetchData } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  function handleFetchClick() {
    fetchData();
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const bottomRef = useRef(null);

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex flex-col items-center mt-[100px] mb-[100px] ">
      {loading ? "Loading..." : null}
      {error ? "ERROR" : null}
      <button
        onClick={handleFetchClick}
        className="border-2 border-black p-1 bg-yellow-400"
      >
        Fetch
      </button>
      <div className="p-5 flex flex-col items-center">
        {data && data.products && data.products.length ? (
          <>
            <h1 className="p-5">Top Section</h1>
            <button
              onClick={handleScrollToBottom}
              className="border-2 border-black p-1 bg-slate-500"
            >
              Scroll to Bottom
            </button>
            <div className="p-5 flex flex-col items-center">
              {data && data.products && data.products.length
                ? data.products.map((item, index) => (
                    <li key={index} className="p-5">
                      {item.title}
                    </li>
                  ))
                : null}
            </div>
            <button
              onClick={handleScrollToTop}
              className="border-2 border-black p-1 bg-slate-500"
            >
              Scroll to Top
            </button>
            <h1 ref={bottomRef} className="p-5">
              Bottom Section
            </h1>
          </>
        ) : null}
      </div>
    </div>
  );
}
