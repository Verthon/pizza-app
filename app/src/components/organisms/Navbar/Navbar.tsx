import { useWindowSize } from "../../../hooks/useWindowSize/useWindowSize"
import { theme } from "../../../theme/theme"

import { MobileNavbar } from "../../molecules/MobileNavbar/MobileNavbar"
import { Styled } from "./Navbar.styles"

export function Navbar() {
  const size = useWindowSize()

  if (size.width <= theme.breakpoints.md) {
    return <MobileNavbar />
  }
  return <Styled.Nav>Desktop Navbar</Styled.Nav>
}
