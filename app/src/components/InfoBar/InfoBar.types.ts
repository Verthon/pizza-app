type Type = "success" | "warning" | "info" | "error" | "default"

export type Props = {
  message: string | null,
  type?: Type,
  duration?: number
}

export type SProps = Omit<Props, "message">