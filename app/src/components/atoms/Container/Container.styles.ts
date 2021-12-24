import styled from "styled-components"

import { Theme, mediaQueries } from "../../../theme/theme"

const Container = styled.div`
  margin: auto;
  padding: 0 ${({ theme }: Theme) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 50px;
  ${mediaQueries("md")`
    margin-bottom: 0;
  `};
`

export const Styled = {
  Container,
}
