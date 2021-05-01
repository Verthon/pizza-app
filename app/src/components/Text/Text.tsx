import* as React from "react"

import { Props } from "./Text.types";

export const Text = ({ variant = "p", align = "lefty" }: Props) => {
  return <Styled.Text as={variant}></Styled.Text>
}