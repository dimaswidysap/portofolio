"use client";

import { Moon, Sun } from "lucide-react";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="py-0.5 rounded-md bg-foreground text-background font-medium transition-all mt-2 w-full"
    >
      <span className="text-sm flex w-full h-full justify-center items-center">
        {theme === "dark" ? <Sun /> : <Moon />}
      </span>
    </button>
  );
}
