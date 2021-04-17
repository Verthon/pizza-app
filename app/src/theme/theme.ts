export interface ITheme {
  colors: typeof colors
  fontSizes: typeof fontSizes
  fontFamily: typeof fontFamily
  fontWeights: typeof fontWeights
  shadow: typeof shadow
  breakpoints: typeof breakpoints
  spacing: typeof spacing
  border: typeof border
  flexColumnMixin: string,
  headerFontSizes: typeof headerFontSizes
}

export type Theme = {
  theme: ITheme
}

const flexColumnMixin = 'display: flex; flex-direction: column'

const border = {
  defaultRadius: '10px',
  smRadius: '5px'
}

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
};

const shadow = {
  default: '0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);',
  category: '0 1px 3px hsla(0, 50%, 20%, 0.2)'
}

const colors = {
  primary50: '#EFF6FF',
  primary100: '#DBEAFE',
  primary200: '#7FC5FF',
  primary300: '#4CAEFF',
  primary400: '#1998FF',
  primary: '#007EE5',
  primary600: '#0062B2',
  primary700: '#00467F',
  primary800: '#002A4C',
  primary900: '#000E19',
  blueGrey100: '#F8FAFC',
  blueGrey200: '#F1F5F9',
  blueGrey300: '#E2E8F0',
  blueGrey400: '#CBD5E1',
  blueGrey500: '#94A3B8',
  blueGrey600: '#64748B',
  blueGrey700: '#334155',
  blueGrey800: '#1E293B',
  blueGrey900: '#0F172A',
  primaryText: 'hsl(0,0%,100%)',
  secondary: 'hsl(180,20%,97.1%)',
  active: 'hsl(154.4,47.1%,65.9%)',
  text: 'hsl(203,13%,44%)',
  white: 'hsl(0,0%,100%)',
  warning: 'hsl(350, 69%, 36%)',
  grey100: '#f5f9ff',
  grey300: '#e5e7ea',
  grey400: '#a5abbd',
  iconColor: '#b4aea5',
  gray2: 'hsl(240,5%,84.3%)',
  dark: "#252525"
}

const fontSizes = {
  title: '1.35rem',
  regular: '1rem',
  small: '0.875rem'
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
  xl: 1200
}

const spacing = {
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '3rem',
  title: '1rem 0 1.5rem 0'
}

const fontFamily = {
  main: "-apple-system, BlinkMacSystemFont, 'Signika', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
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
  headerFontSizes
})
