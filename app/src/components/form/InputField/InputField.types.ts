import { FieldErrors } from "react-hook-form";

export type Props = {
  errorText?: string
  error?: FieldErrors
  label: string
} & React.HTMLProps<HTMLInputElement>