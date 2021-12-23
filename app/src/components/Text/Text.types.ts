export type Props = {
  children: React.ReactNode
  variant?: "p" | "span"
  align?: "center" | "left" | "right"
}

export type SProps = Omit<Props, "children">
