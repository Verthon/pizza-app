import styled from "styled-components"

import { mediaQueries } from "../../theme/theme"
import { Styled as HeaderStyled } from "../../components/atoms/Heading/Heading.styles"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQueries("md")`
    align-items: initial;
  `};
`

const MobileHeading = styled<React.ElementType>(HeaderStyled.Header)`
  display: block;
  ${mediaQueries("md")`
    display: none;
  `};
`

export const Styled = {
  MobileHeading,
  Wrapper,
}
