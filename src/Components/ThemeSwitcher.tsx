import React, { useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useSound from "use-sound";
import { getInitialTheme } from "../Utils";
// note using require and not import because typescript throws an error otherwise
const lightModeSfx = require("../Assets/lightMode.mp3");
const darkModeSfx = require("../Assets/darkMode.mp3");

export const ThemeSwitcher = () => {
  const [theme, setTheme] = React.useState(getInitialTheme());
  const [darkMode, setDarkMode] = React.useState(
    theme === "light" ? false : true
  );
  function toggleDarkMode(checked: boolean) {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setDarkMode(checked);
  }

  useEffect(() => {
    const root = window.document.documentElement;
    switch (theme) {
      case "light":
        root.classList.remove("dark");
        root.classList.add("light");
        localStorage.setItem("color-theme", theme);
        break;
      case "dark":
        root.classList.remove("light");
        root.classList.add("dark");
        localStorage.setItem("color-theme", theme);
        break;
      default:
        break;
    }
  }, [theme, darkMode]);

  // Sounds Section

  const [playOn] = useSound(lightModeSfx, { volume: 0.35 });
  const [playOff] = useSound(darkModeSfx, { volume: 0.25 });

  return (
    <DarkModeSwitch
      className="absolute right-4 top-1"
      checked={darkMode}
      onChange={toggleDarkMode}
      size={40}
      onMouseUp={() => {
        darkMode ? playOn() : playOff();
      }}
    />
  );
};
