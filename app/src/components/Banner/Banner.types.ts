import React from "react"

type Types = {
  default: "default"
  warning: "warning"
  error: "error"
}

export type Props = {
  type?: Types["default"] | Types["warning"] | Types["error"]
  children: React.ReactNode
  open: boolean
}