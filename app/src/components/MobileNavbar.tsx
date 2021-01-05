import * as React from "react"

import { CartIcon } from "../components/icons/CartIcon"
import { MenuIcon } from "../components/icons/MenuIcon"
import { HomeIcon } from "../components/icons/HomeIcon"

export function MobileNavbar() {
  return <nav className="px-10 py-5 fixed bottom-0 w-full">
    <ul className="flex justify-between">
      <li><HomeIcon width="24" height="24"/></li>
      <li><MenuIcon width="24" height="24"/></li>
      <li><CartIcon width="24" height="24"/></li>
    </ul>
  </nav>
}