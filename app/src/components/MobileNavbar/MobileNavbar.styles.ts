import styled from 'styled-components'

import { Theme } from '../../theme/Theme'

export const MobileNavbarContainer = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 0.5rem 1rem;
  box-shadow: ${({theme}: Theme ) => theme.shadow.default};
`

export const MobileNavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const Styled = {
  MobileNavbarContainer,
  MobileNavbarList
}