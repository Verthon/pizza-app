import styled from "styled-components"
import { Provider, SProps } from "./SocialButton.types"

const Button = styled.button<SProps>`
  background-color: ${(props) => {
    return props.provider == Provider.facebook ? props.theme.colors.facebook : props.theme.colors.google;
  }};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: ${({theme}) => theme.border.defaultRadius};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  padding: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
`

export const Styled = {
  Button
}