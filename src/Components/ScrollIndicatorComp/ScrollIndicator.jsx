import { useEffect, useState } from "react";
import "./scroll.css";
/* eslint-disable react/prop-types */
export default function ScrollIndicator({ url }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [url]);

  function getScrollPercentage() {
    const alreadyScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolledPercentage = (alreadyScrolled / height) * 100;

    setScrollPercent(scrolledPercentage);
  }

  useEffect(() => {
    window.addEventListener("scroll", getScrollPercentage);

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div>
      {loading && "Loading..."}
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {products.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}
