"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // console.log("Theme switched to", newTheme);
  };
  const [mode, setMode] = useState(resolvedTheme);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={16}
        height={16}
        className="fixed top-4 right-4"
        sizes="16x16"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  else {
    return (
      <div className="fixed top-3 right-3">
        <DarkModeToggle
          mode={mode}
          size="sm"
          inactiveTrackColor="#f9e2af"
          inactiveTrackColorOnHover="#faf3bf"
          inactiveTrackColorOnActive="#eff1f5"
          inactiveThumbColor="#1e1e2e"
          activeTrackColor="#7287fd"
          activeTrackColorOnHover="#6176dc"
          activeTrackColorOnActive="#1e1e2e"
          activeThumbColor="#eff1f5"
          onChange={(mode) => {
            setMode(mode);
            toggleTheme()
          }}
        />
      </div>
    );
  }
}
