import * as React from "react"
import { useWindowSize } from "../../hooks/useWindowSize/useWindowSize"
import { theme } from "../../theme/Theme";

import { MobileNavbar } from "../MobileNavbar/MobileNavbar"
import { Styled } from "./Navbar.styles"

export function Navbar() {
  const size = useWindowSize();

  if(size.width <= theme.breakpoints.md) {
    return (
      <MobileNavbar />
    )
  }
  return (
    <Styled.Nav>
      Desktop Navbar
    </Styled.Nav>
  )
}