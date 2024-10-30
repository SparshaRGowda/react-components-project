/* eslint-disable react/prop-types */
import MenuList from "./MenuList";

export default function NavigationMenu({ menus = [] }) {
  return (
    <div
      style={{ width: "350px", height: "100vh", backgroundColor: "chocolate" }}
    >
      <MenuList list={menus} />
    </div>
  );
}
