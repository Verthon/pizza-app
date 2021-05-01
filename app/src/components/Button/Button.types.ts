export enum Variant {
  primary = "primary",
  secondary = "secondary",
}

export type Props = {
  variant?: Variant
  loading?: boolean
  type?: "button" | "submit" | "reset"
} & React.HTMLProps<HTMLButtonElement>

export type SProps = Omit<Props, "children">
