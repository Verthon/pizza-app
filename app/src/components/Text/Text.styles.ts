import styled from "styled-components"
import { SProps } from "./Text.types"

const Text = styled.p<SProps>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: ${(props) => props.align};
`

export const Styled = {
  Text,
}
