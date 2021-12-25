import { ITheme } from "../../../theme/theme"

export enum Size {
  xs = "1rem",
  sm = "1.25rem",
  md = "1.5rem",
  lg = "1.75rem",
  xl = "2rem",
  xxl = "2.5rem",
}

export type Sizes = keyof ITheme["headerFontSizes"]

export type Props = {
  children: React.ReactNode
  level: number
  size?: Sizes
}

export type SProps = {
  as: keyof JSX.IntrinsicElements
  size: Sizes
}
