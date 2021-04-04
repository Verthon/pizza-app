import { theme } from "../theme/Theme";

export const getIconColor = (route: string) => {
  if (typeof window !== `undefined` && route === window?.location?.pathname) {
    return theme.colors.dark;
  }

  return theme.colors.iconColor;
}