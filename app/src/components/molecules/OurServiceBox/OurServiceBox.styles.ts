import styled from "styled-components"

import { mediaQueries } from "../../../theme/theme"
import { Styled as HeadingStyles } from "../../atoms/Heading/Heading.styles"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  ${mediaQueries("lg")`
  padding: 1rem;
  `};
  ${HeadingStyles.Header} {
    margin: ${({ theme }) => theme.spacing.xs} 0;
  }
`

export const Styled = {
  Wrapper,
}
