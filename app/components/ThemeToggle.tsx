"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const THEME_KEY = "theme";

function applyTheme(theme: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const stored = window.localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const nextTheme: ThemeMode =
      stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";

    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const updateTheme = (nextTheme: ThemeMode) => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_KEY, nextTheme);
    }
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-[12px]">
      <button
        type="button"
        onClick={() => updateTheme("light")}
        aria-pressed={theme === "light"}
        className={`rounded-full px-3 py-1 transition ${theme === "light" ? "bg-white text-neutral-900" : "text-white/70 hover:text-white"
          }`}
      >
        Light
      </button>
      <button
        type="button"
        onClick={() => updateTheme("dark")}
        aria-pressed={theme === "dark"}
        className={`rounded-full px-3 py-1 transition ${theme === "dark" ? "bg-white text-neutral-900" : "text-white/70 hover:text-white"
          }`}
      >
        Dark
      </button>
    </div>
  );
}
