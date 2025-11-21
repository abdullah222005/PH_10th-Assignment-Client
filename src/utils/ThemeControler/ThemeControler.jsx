import { useEffect, useState } from "react";

const ThemeController = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "lightTheme"
  );

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <span>Light</span>
      <input
        type="checkbox"
        className="toggle"
        checked={theme === "darkTheme"}
        onChange={() =>
          setTheme(theme === "lightTheme" ? "darkTheme" : "lightTheme")
        }
      />
      <span>Dark</span>
    </div>
  );
};

export default ThemeController;
