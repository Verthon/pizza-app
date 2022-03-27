import styled from "styled-components"
import { SProps } from "./Text.types"

const Text = styled.p<SProps>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: ${(props) => props.align};
  line-height: 1.5;
  max-width: 30rem;
`

export const Styled = {
  Text,
}
