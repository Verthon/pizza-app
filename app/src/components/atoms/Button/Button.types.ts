import { HEIGHT } from "./Button"

export enum Variant {
  primary = "primary",
  secondary = "secondary",
}

type Size = keyof typeof HEIGHT

export type Props = {
  variant?: Variant
  $loading?: boolean
  type?: "button" | "submit" | "reset"
  $size?: Size
  outline?: boolean
} & React.HTMLProps<HTMLButtonElement>

export type SProps = Omit<Props, "children">
