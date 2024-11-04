import { useEffect, useState } from "react";

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function selectedPage(selected) {
    if (selected >= 1 && selected <= products.length / 10 && selected != page) {
      setPage(selected);
    }
  }

  return (
    <div>
      {products.length > 0 ? (
        <div className="grid grid-cols-3 gap-20 ml-56">
          {products.slice(page * 10 - 10, page * 10).map((item, index) => (
            <span
              key={index}
              className="h-[250px] w-[250px] p-5 border rounded-lg text-center cursor-pointer bg-pink-200 mt-5"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-[100%] object-cover"
              />
              <span>{item.title}</span>
            </span>
          ))}
        </div>
      ) : null}
      {products.length > 0 && (
        <div className="flex justify-center p-10 m-[15px]">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="pt-4 pb-4 pr-5 pl-5 border border-1 cursor-pointer disabled:bg-slate-400"
          >
            ◀︎
          </button>

          {[...Array(products.length / 10)].map((_, index) => (
            <span
              key={index}
              onClick={() => selectedPage(index + 1)}
              className={`pt-4 pb-4 pr-5 pl-5 border border-1 cursor-pointer ${
                page === index + 1 ? "bg-pink-700" : ""
              }`}
            >
              {index + 1}
            </span>
          ))}

          <button
            disabled={page === products.length / 10}
            onClick={() => setPage(page + 1)}
            className="pt-4 pb-4 pr-5 pl-5 border border-1 cursor-pointer disabled:bg-slate-400"
          >
            ▶︎
          </button>
        </div>
      )}
    </div>
  );
}
