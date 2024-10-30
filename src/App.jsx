// import Accordian from "./Components/AccordianComp/Accordian";
// import RandomColor from "./Components/RandomColorComp/RandomColor";
// import StarRating from "./Components/StarRatingComp/StarRating";
// import ImageSlider from "./Components/ImageSliderComp/ImageSlider";
// import LoadMore from "./Components/LoadMoreComp/LoadMore";
import NavigationMenu from "./Components/NavigationMenuComp/NavigationMenu";
import { menus } from "./Components/NavigationMenuComp/data";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={5} /> */}
      {/* <ImageSlider url="https://picsum.photos/v2/list" limit={"4"} page={"1"} /> */}
      {/* <LoadMore /> */}
      <NavigationMenu menus={menus} />
    </>
  );
}

export default App;
