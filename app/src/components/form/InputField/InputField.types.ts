import {Control, FieldErrors} from "react-hook-form"

export type Props = {
  name: string
  errorText?: string
  error?: FieldErrors
  label: string
  control: Control
} & React.HTMLProps<HTMLInputElement>
