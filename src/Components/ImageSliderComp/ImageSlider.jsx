/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit, page }) {
  //default values for limit and page
  const [imagesArray, setImagesArray] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleLeftArrow = () => {
    setCurrentImage(
      currentImage === 0 ? imagesArray.length - 1 : currentImage - 1
    );
  };

  const handleRightArrow = () => {
    setCurrentImage(
      currentImage === imagesArray.length - 1 ? 0 : currentImage + 1
    );
  };

  useEffect(() => {
    if (url) {
      try {
        setLoading(true);
        fetch(`${url}?page=${page}&limit=${limit}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log("data", data);
            setImagesArray(data);
            console.log("images", imagesArray);
            setLoading(false);
          });
      } catch (e) {
        setError(e.message);
      }
    }
  }, [url]);

  return (
    <div className="container">
      {error && "Something went wrong"}
      {loading && "Loading..."}
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handleLeftArrow}
      />
      {imagesArray &&
        imagesArray.length > 0 &&
        imagesArray.map((image, index) => (
          <img
            className={
              currentImage === index
                ? "current-image"
                : "current-image hide-current-image"
            }
            key={image.id}
            src={image.download_url}
            alt="image"
          />
        ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleRightArrow}
      />
      <span className="circle-indicators">
        {imagesArray &&
          imagesArray.length > 0 &&
          imagesArray.map((image, index) => (
            <button
              className={
                currentImage === index
                  ? "current-indicator"
                  : "inactive-indicator"
              }
              key={index}
              onClick={() => setCurrentImage(index)}
            />
          ))}
      </span>
    </div>
  );
}
