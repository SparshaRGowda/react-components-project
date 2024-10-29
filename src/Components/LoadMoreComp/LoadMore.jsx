import { useEffect, useState } from "react";

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
        setProducts(data.products);
        setLoading(false);
        setErrorMsg(null);
      })
      .catch((e) => {
        setErrorMsg(e.message);
        console.log("Error", errorMsg);
      });
  }, []);

  if (loading) <div>Loading...</div>;

  return (
    <div className="container">
      <div className="image-container">
        {products &&
          products.length > 0 &&
          products.map((item) => (
            <img
              className="product"
              key={item.id}
              src={item.thumbnail}
              alt={item.title}
            />
          ))}
      </div>
      <button onClick={() => setCount(count + 1)}>Load More</button>
    </div>
  );
}
