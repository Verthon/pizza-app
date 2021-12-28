import styled from "styled-components"

import { mediaQueries } from "../../theme/theme"
import { Heading } from "../../components/atoms/Heading/Heading"

const MobileHeading = styled(Heading)`
  display: none;
  color: red;
  ${mediaQueries("md")`
    color: red;
    display: none;
  `};
`

export const Styled = {
    MobileHeading
}