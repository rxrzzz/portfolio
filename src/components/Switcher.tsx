import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const Switcher = () => {
  const [storage, setStorage] = useState<Storage | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setStorage(localStorage);
    }
  }, []);

  const storageTheme = storage && storage.getItem("theme");
  const [theme, setTheme] = useState(storageTheme);
  const [isDark, setIsDark] = useState(theme === "dark" ? true : false);
  const colorTheme = theme === "dark" ? "light" : "dark";

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setIsDark(checked);
  };
  useEffect(() => {
    const root = document.body;
    root.classList.remove(colorTheme);
    root.classList.add(theme!);
    localStorage.setItem("theme", theme!);
  }, [theme, colorTheme]);
  return (
    <div className=" flex items-center ml-1">
      <DarkModeSwitch
        checked={isDark}
        onChange={toggleDarkMode}
        size={30}
        moonColor="white"
        sunColor="white"
      />
    </div>
  );
};
