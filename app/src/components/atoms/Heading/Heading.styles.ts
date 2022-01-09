import styled, { css } from "styled-components"

import { SProps } from "./Heading.types"

const baseStyle = css<SProps>`
  text-align: ${(props) => props.align};
  font-size: ${(props) => props.theme.headerFontSizes[props.size]};
`

const Header = styled.h1<SProps>`
  ${baseStyle}
`

export const Styled = {
  Header,
}
