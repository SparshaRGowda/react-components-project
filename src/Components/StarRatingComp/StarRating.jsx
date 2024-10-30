import { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0); //3

  function handleClick(getIndex) {
    setRating(getIndex === rating ? rating - 1 : getIndex);
  }
  function handleMouseEnter(getIndex) {
    setHover(getIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  //npm install react-icons --save
  return (
    <div className="container">
      {[...Array(noOfStars)].map((star, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= hover || index <= rating ? "active" : "inactive"
            }
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
}
