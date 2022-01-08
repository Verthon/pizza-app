import styled from "styled-components"

import { mediaQueries } from "../../../theme/theme"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  ${mediaQueries("lg")`
  padding: 1rem;
  `};
`

export const Styled = {
  Wrapper,
}
