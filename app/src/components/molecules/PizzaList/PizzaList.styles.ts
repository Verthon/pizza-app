import styled from "styled-components"

import { mediaQueries } from "../../../theme/theme"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;
  ${mediaQueries("lg")`
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 2fr;
  `};
`

export const Styled = {
  Container,
}
