import React from "react";
import { theme } from "../../theme/theme";
import { Spinner } from "../icons/Spinner";
import { Styled } from "./Button.styles";
import { Props, Variant } from "./Button.types";

const HEIGHT = Object.freeze({
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
})

export const Button = ({ variant = Variant.primary, children, $loading = false, type = "submit", disabled = false, size = "medium", outline }: Props) => {
  const setHeight = () =>  {
    const key = Object.keys(HEIGHT).find(key =>  key === size);
    if (key) {
      return HEIGHT[key];
    }

    return HEIGHT["medium"]
  }
  const height = setHeight();
  const spinnerColor = outline ? theme.colors.primary : theme.colors.white;
  return (
    <Styled.Button variant={variant} $loading={$loading} type={type} disabled={disabled} height={height}>
      {$loading ? <Spinner width={height - 5} height={height - 5} color={spinnerColor} /> : children}
    </Styled.Button>
  )
}