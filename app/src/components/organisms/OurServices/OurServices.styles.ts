import styled from "styled-components"

import { mediaQueries } from "../../../theme/theme"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: ${({ theme }) => theme.spacing.lg} 0;
  ${mediaQueries("lg")`
    grid-template-columns: repeat(3, 1fr);
  `};
`

export const Styled = {
  Container,
}
