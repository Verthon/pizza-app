import React from "react";
import { Styled } from "./Button.styles";
import { Props, Variant } from "./Button.types";

export const Button = ({ variant = Variant.primary, children, loading = false, type = "submit" }: Props) => {
  return (
    <Styled.Button variant={variant} loading={loading} type={type}>{children}</Styled.Button>
  )
}