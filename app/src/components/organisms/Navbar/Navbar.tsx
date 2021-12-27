import { useWindowSize } from "../../../hooks/useWindowSize/useWindowSize"
import { theme } from "../../../theme/theme"
import { Container } from "../../atoms/Container/Container"
import { Link } from "../../atoms/Link/Link"
import { ROUTES } from "../../../constants/routes"

import { MobileNavbar } from "../../molecules/MobileNavbar/MobileNavbar"
import { Styled } from "./Navbar.styles"

export function Navbar() {
  const size = useWindowSize()

  if (size.width <= theme.breakpoints.md) {
    return <MobileNavbar />
  }
  return <Container><Styled.Nav>
    <Styled.Logo>Mighty Pizza</Styled.Logo>
    <Styled.List>
      <Styled.ListItem><Link route={ROUTES.home}>
        Home
      </Link></Styled.ListItem>
      <Styled.ListItem><Link route={ROUTES.menu}>
        Menu
      </Link></Styled.ListItem>
      <Styled.ListItem><Link route={ROUTES.account}>
        Account
      </Link></Styled.ListItem>
      <Styled.ListItem><Link route={ROUTES.order}>
        Order
      </Link></Styled.ListItem>
    </Styled.List>
  </Styled.Nav></Container>
}
