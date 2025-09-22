"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black transition-colors duration-300"
    >
      {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
