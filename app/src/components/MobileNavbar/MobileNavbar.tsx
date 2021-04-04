import * as React from "react"
import { Link } from "gatsby"

import { ROUTES } from "../../constants/routes"
import { CartIcon } from "../icons/CartIcon"
import { HomeIcon } from "../icons/HomeIcon"
import { MenuIcon } from "../icons/MenuIcon"
import { theme } from "../../theme/Theme";

import { Styled } from "./MobileNavbar.styles"

export function MobileNavbar() {

  React.useEffect(() => {
    console.log(window.location.pathname);
  }, [])

  const getIconColor = (route: string) => {
    if(route === window.location.pathname) {
      return theme.colors.dark;
    }

    return theme.colors.iconColor;
  }

  return <Styled.MobileNavbarContainer>
    <Styled.MobileNavbarList>
      <li><Link to={ROUTES.home}><HomeIcon color={getIconColor(ROUTES.home)} width={26} height={26} /></Link></li>
      <li><Link to={ROUTES.menu}><MenuIcon color={getIconColor(ROUTES.menu)} width={26} height={26} /></Link></li>
      <li><Link to={ROUTES.order}><CartIcon color={getIconColor(ROUTES.order)} width={26} height={26} /></Link></li>
    </Styled.MobileNavbarList>
  </Styled.MobileNavbarContainer>
}