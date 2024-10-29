// import Accordian from "./Components/AccordianComp/Accordian";
// import RandomColor from "./Components/RandomColorComp/RandomColor";
// import StarRating from "./Components/StarRatingComp/StarRating";
import ImageSlider from "./Components/ImageSliderComp/ImageSlider";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={5} /> */}
      <ImageSlider url="https://picsum.photos/v2/list" limit={"4"} page={"1"} />
    </>
  );
}

export default App;
