export const getInitialTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      // Note the line below ensures that we only returning a light or dark parameter
      // also this is for typescript
      if (storedPrefs === "light" || storedPrefs === "dark") {
        return storedPrefs;
      }
    }

    const userMedia = window.matchMedia("(prefers-color-scheme:dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  // returning default theme here
  return "light";
};
