export enum Variant {
  primary = "primary",
  secondary = "secondary",
}

export type Props = {
  variant: Variant
  children: React.ReactNode
}
