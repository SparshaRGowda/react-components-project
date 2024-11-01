/* eslint-disable react/prop-types */
export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {data &&
        data.length &&
        data.map((item, index) => (
          <li key={index} onClick={handleClick}>
            {item}
          </li>
        ))}
    </ul>
  );
}
