export enum Variant {
  primary = "primary",
  secondary = "secondary",
}

type Size = "xsmall" | "small" | "medium" | "large"

export type Props = {
  variant?: Variant
  $loading?: boolean
  type?: "button" | "submit" | "reset"
  size?: Size
  outline?: boolean
} & React.HTMLProps<HTMLButtonElement>

export type SProps = Omit<Props, "children">
