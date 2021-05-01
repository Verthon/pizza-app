import styled from "styled-components"
import { SProps, Variant } from "./Button.types"

const Button = styled.button<SProps>`
  background-color: ${(props) => {
    if(props.variant === Variant.primary) {
      return props.theme.colors.primary
    }
  }};
  border-radius: ${({theme}) => theme.border.defaultRadius};
  border: 0;
  padding: ${({theme}) => theme.spacing.sm};
  color: ${({theme}) => theme.colors.white};
  font-weight: 600;

  &:disabled {
    background-color: ${({theme}) => theme.colors.primary100};
  }
`

export const Styled = {
  Button
}