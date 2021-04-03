import * as React from "react"
import { Link } from "gatsby"

import { ROUTES } from "../../constants/routes"
import { CartIcon } from "../icons/CartIcon"
import { HomeIcon } from "../icons/HomeIcon"
import { MenuIcon } from "../icons/MenuIcon"

import { Styled } from "./MobileNavbar.styles"

export function MobileNavbar() {
  return <Styled.MobileNavbarContainer>
    <Styled.MobileNavbarList>
      <li><Link to={ROUTES.home}><HomeIcon width="24" height="24"/></Link></li>
      <li><Link to={ROUTES.menu}><MenuIcon width="24" height="24"/></Link></li>
      <li><Link to={ROUTES.order}><CartIcon width="24" height="24"/></Link></li>
    </Styled.MobileNavbarList>
  </Styled.MobileNavbarContainer>
}