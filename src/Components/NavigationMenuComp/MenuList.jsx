/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length > 0
        ? list.map((menuItem, index) => (
            <MenuItem key={index} item={menuItem} />
          ))
        : null}
    </ul>
  );
}
