export type ColorScheme = "light" | "dark";

class ColorSchemeService {
  static KEY = "github-dm@color-scheme";
  private static scheme: ColorScheme = ColorSchemeService.loadScheme();

  private static loadScheme(): ColorScheme {
    const isDark =
      localStorage[ColorSchemeService.KEY] === "dark" ||
      (!(ColorSchemeService.KEY in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    return isDark ? "dark" : "light";
  }

  private static modifyScheme() {
    if (ColorSchemeService.scheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  private static getScheme() {
    return {
      scheme: ColorSchemeService.scheme,
      systemEnabled: !localStorage[ColorSchemeService.KEY]
    };
  }
  static initScheme() {
    ColorSchemeService.scheme = ColorSchemeService.loadScheme();
    ColorSchemeService.modifyScheme();
    return this.getScheme();
  }
  static setUserScheme(scheme: ColorScheme) {
    localStorage[ColorSchemeService.KEY] = scheme;
    return ColorSchemeService.initScheme();
  }
  static setSystemScheme() {
    localStorage.removeItem(ColorSchemeService.KEY);
    return ColorSchemeService.initScheme();
  }
}

export default ColorSchemeService;
