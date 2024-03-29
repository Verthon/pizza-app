import { ITheme } from "../../../theme/theme"

export enum Size {
  xs = "1rem",
  sm = "1.25rem",
  md = "1.5rem",
  lg = "1.75rem",
  xl = "2rem",
  xxl = "2.5rem",
}

export type Alignment = "left" | "right" | "center"

export type Sizes = keyof ITheme["headerFontSizes"]

export type Props = {
  children: JSX.Element | JSX.Element[] | string | React.ElementType
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: Sizes
  align?: Alignment
}

export type SProps = {
  as: keyof JSX.IntrinsicElements
  size: Sizes
  align: Alignment
}
