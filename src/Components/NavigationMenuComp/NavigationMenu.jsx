/* eslint-disable react/prop-types */
import MenuList from "./MenuList";

export default function NavigationMenu({ menus = [] }) {
  return (
    <nav
      style={{ width: "350px", height: "100vh", backgroundColor: "chocolate" }}
    >
      <MenuList list={menus} />
    </nav>
  );
}
{
  /* <nav
  style={{
    width: "100vw",
    height: "50px",
    backgroundColor: "chocolate",
    position: "absolute",
    top: 0,
    display: "flex",
    gap: "2rem",
  }}
>
  <div>
    <p>home</p>
  </div>
  <div>
    <p>place1</p>
  </div>
  <div>
    <p>place2</p>
  </div>
  //  <MenuList list={menus} /> 
</nav>; */
}
