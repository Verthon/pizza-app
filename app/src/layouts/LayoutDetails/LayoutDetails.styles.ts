import styled from "styled-components"

import { mediaQueries } from "../../theme/theme"

const Container = styled.div`
  margin: 0 2rem;
`

const Navbar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    cursor: pointer;

    svg {
      stroke: ${({ theme }) => theme.colors.blueGrey700};
      width: 22px;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.blueGrey700};
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  position: fixed;
  bottom: 2rem;

  ${mediaQueries("md")`
    display: none;
  `};
`

export const Styled = {
  Container,
  Navbar,
  Footer,
}
