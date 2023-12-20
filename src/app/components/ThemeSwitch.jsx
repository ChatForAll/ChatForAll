import { useState } from "react";
import { useTheme } from "next-themes";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // console.log("Theme switched to", newTheme);
  };
  const [mode, setMode] = useState(resolvedTheme);

  return (
    // <div className="fixed top-3 right-3">
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
        toggleTheme();
      }}
    />
    // </div>
  );
}
