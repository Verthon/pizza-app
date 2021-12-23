import {Link as GLink} from "gatsby"
import styled from "styled-components"

const Link = styled(GLink)`
  color: ${({theme}) => theme.colors.primary};
`

const Anchor = styled.a`
  color: ${({theme}) => theme.colors.primary};
`

export const Styled = {
  Link,
  Anchor,
}
