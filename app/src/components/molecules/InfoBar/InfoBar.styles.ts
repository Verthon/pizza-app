import styled from "styled-components"
import { SProps } from "./InfoBar.types"

const Container = styled.div<SProps>`
  background-color: ${(props) => {
    if (props.type === "error") {
      return props.theme.colors.danger600
    }
    return props.theme.colors.blueGrey200
  }};
  color: ${(props) => {
    if (props.type === "error") {
      return props.theme.colors.white
    }
    return props.theme.colors.blueGrey700
  }};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm};
`

export const Styled = {
  Container,
}
