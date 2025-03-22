import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import ButtonIcon from "../../ui/ButtonIcon";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [isDark]);

  return (
    <ButtonIcon
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <IoSunnyOutline className="~text-lg/2xl text-gray-700 dark:hover:text-white dark:text-white" />
      ) : (
        <IoMoonOutline className="~text-lg/2xl text-grey-700 dark:hover:text-white" />
      )}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
