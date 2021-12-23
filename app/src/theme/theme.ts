export interface ITheme {
  colors: typeof colors
  fontSizes: typeof fontSizes
  fontFamily: typeof fontFamily
  fontWeights: typeof fontWeights
  shadow: typeof shadow
  breakpoints: typeof breakpoints
  spacing: typeof spacing
  border: typeof border
  flexColumnMixin: string
  headerFontSizes: typeof headerFontSizes
}

export type Theme = {
  theme: ITheme
}

const flexColumnMixin = "display: flex; flex-direction: column"

const border = {
  defaultRadius: "5px",
  smRadius: "2px",
}

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | string) => `@media (min-width: ${breakpoints[key]}em) { ${style} }`
}

const shadow = {
  default: "0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);",
  category: "0 1px 3px hsla(0, 50%, 20%, 0.2)",
}

const colors = {
  primary50: "#EFF6FF",
  primary100: "#DBEAFE",
  primary200: "#7FC5FF",
  primary300: "#4CAEFF",
  primary400: "#1998FF",
  primary: "#3366FF",
  primary600: "#0062B2",
  primary700: "#00467F",
  primary800: "#002A4C",
  primary900: "#000E19",
  blueGrey100: "#F8FAFC",
  blueGrey200: "#F1F5F9",
  blueGrey300: "#E2E8F0",
  blueGrey400: "#CBD5E1",
  blueGrey500: "#94A3B8",
  blueGrey600: "#64748B",
  blueGrey700: "#334155",
  blueGrey800: "#1E293B",
  blueGrey900: "#0F172A",
  grey200: "#FAFAFC",
  grey300: "#F2F2F5",
  grey400: "#EBEBF0",
  grey500: "#E3E4EB",
  grey600: "#e5e7ea",
  grey700: "#a5abbd",
  success100: "#D6FDD1",
  success200: "#A7F9A7",
  success300: "#78ED84",
  success400: "#54DC6E",
  success500: "#23C653",
  success600: "#1AAA52",
  success700: "#118D4E",
  success800: "#0B7247",
  success900: "#065F43",
  danger100: "#FFE6D7",
  danger200: "#FFC9B1",
  danger300: "#FFA288",
  danger400: "#FF7F6A",
  danger500: "#FF4539",
  danger600: "#DB2A30",
  danger700: "#B81D2F",
  danger800: "#93132C",
  danger900: "#7A0B2B",
  primaryText: "hsl(0,0%,100%)",
  secondary: "hsl(180,20%,97.1%)",
  active: "hsl(154.4,47.1%,65.9%)",
  text: "hsl(203,13%,44%)",
  white: "hsl(0,0%,100%)",
  warning: "hsl(350, 69%, 36%)",
  grey100: "#f5f9ff",
  iconColor: "#b4aea5",
  gray2: "hsl(240,5%,84.3%)",
  dark: "#252525",
  facebook: "#4267B2",
  google: "#de5246",
}

const fontSizes = {
  title: "1.5rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
  xxl: "1.75rem",
}

const headerFontSizes = {
  xs: "1rem",
  sm: "1.25rem",
  md: "1.5rem",
  lg: "1.75rem",
  xl: "2rem",
  xxl: "2.5rem",
}

const fontWeights = {
  black: 800,
  bold: 600,
  regular: 400,
}

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const spacing = {
  xxs: "0.25rem",
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "3rem",
  title: "1rem 0 1.5rem 0",
}

const fontFamily = {
  main: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
}

export const theme: ITheme = Object.freeze({
  colors,
  fontSizes,
  fontFamily,
  fontWeights,
  shadow,
  breakpoints,
  spacing,
  border: border,
  flexColumnMixin,
  headerFontSizes,
})
