import React from "react";
import { Styled } from "./Button.styles";
import { Props, Variant } from "./Button.types";

export const Button = ({ variant = Variant.primary, children, loading = false, type = "submit", disabled = false }: Props) => {
  const isDisabled = loading || disabled
  return (
    <Styled.Button variant={variant} loading type={type} disabled={isDisabled}>{children}</Styled.Button>
  )
}