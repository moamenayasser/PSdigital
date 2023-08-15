"use client";

import { createContext, useState } from "react";
import Cookies from "js-cookie";

export const ThemeContext = createContext();

const ThemeProvider = ({ children, defaultTheme }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    Cookies.set("theme", newTheme, { expires: 7 });
    if (typeof window !== "undefined") {
      if (
        document.documentElement.classList.contains("dark") ||
        document.documentElement.classList.contains("light")
      ) {
        document.documentElement.classList.remove("dark", "light");
      }
      document.documentElement.classList.add(newTheme);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
