import { ref } from "vue";

const isDark = ref(false);

export function useTheme() {
  const toggleTheme = () => {
    const root = document.documentElement;
    isDark.value = !isDark.value;

    if (isDark.value) {
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
