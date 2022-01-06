import styled from "styled-components"

import { mediaQueries } from "../../../theme/theme"

const Container = styled.div`
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 50px;
  ${mediaQueries("md")`
    margin-bottom: 0;
    padding: 0 2rem;
  `};
  ${mediaQueries("xxl")`
    max-width: 1400px;
  `};
  ${mediaQueries("x1")`
    max-width: 1600px;
  `};
`

export const Styled = {
  Container,
}
