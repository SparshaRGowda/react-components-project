import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMore() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    )
      .then((res) => {
        // if(!res.ok){
        //     throw Error();
        return res.json();
      })
      .then((data) => {
        setProducts((prev) => {
          return [...prev, ...data.products];
        });
        setLoading(false);
        setErrorMsg(null);
      })
      .catch((e) => {
        setErrorMsg(e.message);
        console.log("Error", errorMsg);
      });
  }, [count]);

  if (loading) <div>Loading...</div>;

  return (
    <div className="container">
      <div className="product-container">
        {products &&
          products.length > 0 &&
          products.map((item, index) => (
            // creating a unique id for each product to avoid duplication warning ${item.id}-${index}
            <div className="product" key={`${item.id}-${index}`}>
              <img src={item.thumbnail} alt={item.title} />
              <span>{item.title}</span>
            </div>
          ))}
      </div>
      <button
        onClick={() => setCount(count + 1)}
        disabled={products && products.length === 100}
      >
        Load More
      </button>
    </div>
  );
}
