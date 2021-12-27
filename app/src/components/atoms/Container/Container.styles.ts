import styled from "styled-components"

import { mediaQueries } from "../../../theme/theme"

const Container = styled.div`
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 50px;
  ${mediaQueries("md")`
    margin-bottom: 0;
    padding: 0 3rem;
  `};
`

export const Styled = {
  Container,
}
