import * as React from "react"
import { Styled } from "./ErrorMessage.styles"
import { Props } from "./ErrorMessage.types"

export const ErrorMessage = ({ error }: Props) => {
  return <Styled.Container>
    {error?.message}
  </Styled.Container>
}