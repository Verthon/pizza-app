import React from "react"
import { Props, Size } from "./Heading.types"
import { Styled } from "./Heading.styles"

export const Heading = ({ level = 1, children, size = "md" }: Props) => {
  //temporary solution to omit issues before updating styled-components and its types
  const currentTag: any = `h${level}`;

  return (
    <Styled.Header as={currentTag} size={size}>
      {children}
    </Styled.Header>
  );
}