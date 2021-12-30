import styled from "styled-components"

import { mediaQueries } from "../../theme/theme"
import { Styled as HeaderStyled } from "../../components/atoms/Heading/Heading.styles"

const MobileHeading = styled(HeaderStyled.Header)`
      display: block;
      ${mediaQueries("md")`
        display: none;
      `};
    }
`

export const Styled = {
  MobileHeading,
}
