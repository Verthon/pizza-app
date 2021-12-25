export type Props = {
  children: React.ReactNode
  provider: "facebook" | "google"
}

export type SProps = Omit<Props, "children">
