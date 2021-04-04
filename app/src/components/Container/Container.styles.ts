import styled from "styled-components";

import { Theme } from "../../theme/Theme";

const Container = styled.div`
  margin: auto;
  padding: 0 ${({theme}: Theme ) => theme.spacing.md};
`

export const Styled = {
  Container
}