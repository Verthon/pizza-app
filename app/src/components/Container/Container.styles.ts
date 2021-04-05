import styled from "styled-components";

import { Theme, mediaQueries } from "../../theme/Theme";

const Container = styled.div`
  margin: auto;
  padding: 0 ${({theme}: Theme ) => theme.spacing.md};
  margin-bottom: 50px;
`

export const Styled = {
  Container
}