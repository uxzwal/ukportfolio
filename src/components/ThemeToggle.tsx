import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200"
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </motion.button>
  );
};

export default ThemeToggle;
