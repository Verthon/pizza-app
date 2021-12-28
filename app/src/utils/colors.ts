import { theme } from "../theme/theme"

export const getIconColor = (routes: string[]) => {
  if (typeof window !== `undefined` && routes.includes(window?.location?.pathname)) {
    return theme.colors.dark
  }

  return theme.colors.iconColor
}
