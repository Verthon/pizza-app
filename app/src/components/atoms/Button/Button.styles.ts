import styled from "styled-components"
import { SProps } from "./Button.types"

const Button = styled.button<SProps>`
  background-color: ${(props) => {
    if (props.variant === "primary") {
      return props.theme.colors.primary
    }
  }};
  border-radius: ${({ theme }) => theme.border.defaultRadius};
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  height: ${(props) => props.height}px;
  font-weight: 600;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey400};
  }
  cursor: pointer;
`

export const Styled = {
  Button,
}
