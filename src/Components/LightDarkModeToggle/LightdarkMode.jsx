import useLocalStorage from "./useLocalStorage";
import "./styles.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        {" "}
        <p>hello world!!!</p>
        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          Change theme
        </button>
      </div>
    </div>
  );
}
