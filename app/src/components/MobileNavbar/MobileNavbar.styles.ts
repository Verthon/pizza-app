import styled from 'styled-components'

import { Theme } from '../../theme/theme'

export const MobileNavbarContainer = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 0.75rem 1.5rem;
  box-shadow: ${({theme}: Theme ) => theme.shadow.default};
  background-color: ${({theme}: Theme ) => theme.colors.white};
  border-top: 1px solid ${({theme}: Theme ) => theme.colors.grey300};
`

export const MobileNavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  li a {
    display: flex;
    align-items: center;
  }
`

export const Styled = {
  MobileNavbarContainer,
  MobileNavbarList
}