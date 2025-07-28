import { ref } from "vue";

const isDark = ref(false);

export function useTheme() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains("my-app-dark");

    if (isDark) {
      root.classList.remove("my-app-dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("my-app-dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const initTheme = () => {
    const saved = localStorage.getItem("theme") || "light";
    isDark.value = saved === "dark";
    toggleTheme();
  };

  return { isDark, toggleTheme, initTheme };
}
