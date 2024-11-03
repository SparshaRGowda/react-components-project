import UseWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = UseWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}
