import { HEIGHT } from "./Button"

type Size = keyof typeof HEIGHT

export type Props = {
  variant?: "primary" | "secondary"
  $loading?: boolean
  type?: "button" | "submit" | "reset"
  $size?: Size
  outline?: boolean
} & React.HTMLProps<HTMLButtonElement>

export type SProps = Omit<Props, "children">
