import React from "react";
import { Styled } from "./Button.styles";
import { Props, Variant } from "./Button.types";

export const Button = ({ variant = Variant.primary, children }: Props) => {
  return (
    <Styled.Button variant={variant}>{children}</Styled.Button>
  )
}