import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
`

const List = styled.ul`
  display: flex;
`

const ListItem = styled.li`
  margin: 0 0.5rem;

  a {
    color: ${({ theme }) => theme.colors.blueGrey900};
  }
`

export const Styled = {
  Nav,
  Logo,
  List,
  ListItem
}
