import styled from "styled-components"
import { SProps } from "./Heading.types"

const Header = styled.h1<SProps>`
  text-align: center;
  font-size: ${(props) => props.theme.headerFontSizes[props.size]}
`

export const Styled = {
  Header
}