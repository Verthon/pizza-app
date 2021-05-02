import React from "react"
import { Props, Size } from "./Heading.types"
import { Styled } from "./Heading.styles"

export const Heading = ({ level = 1, children, size = Size.md }: Props) => {
  return (
    <Styled.Header as={`h${level}`} size={size}>
      {children}
    </Styled.Header>
  );
}