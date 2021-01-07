import * as React from "react"
import { Link } from "gatsby"

import { ROUTES } from "../constants/routes"
import { CartIcon } from "../components/icons/CartIcon"
import { HomeIcon } from "../components/icons/HomeIcon"
import { MenuIcon } from "../components/icons/MenuIcon"


export function MobileNavbar() {
  return <nav className="px-10 py-5 fixed bottom-0 w-full shadow-sm">
    <ul className="flex justify-between">
      <li><Link to={ROUTES.home}><HomeIcon width="24" height="24"/></Link></li>
      <li><Link to={ROUTES.menu}><MenuIcon width="24" height="24"/></Link></li>
      <li><Link to={ROUTES.order}><CartIcon width="24" height="24"/></Link></li>
    </ul>
  </nav>
}