class ThemeService {
  private static theme = ThemeService.isDarkModeEnabled() ? "dark" : "light";
  private static isDarkModeEnabled() {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }
  private static modify() {
    if (ThemeService.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  static initTheme() {
    ThemeService.theme = ThemeService.isDarkModeEnabled() ? "dark" : "light";
    ThemeService.modify();
    return ThemeService.theme;
  }
  static setCustomTheme(theme: "light" | "dark") {
    localStorage.theme = theme;
    ThemeService.initTheme();
  }
  static setSystemTheme() {
    localStorage.removeItem("theme");
    ThemeService.initTheme();
  }
  static getTheme() {
    return ThemeService.theme;
  }
}

export default ThemeService;
