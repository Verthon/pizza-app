export enum Provider {
  facebook = "facebook",
  google = "google"
}

export type Props = {
  children: React.ReactNode
  provider: Provider
}

export type SProps = Omit<Props, "children">