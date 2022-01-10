import { CartIcon } from "@/icons/Cart"
import { Link } from "gatsby"

import { HomeIcon } from "@/icons/Home"
import { MenuIcon } from "@/icons/Menu"
import { UserIcon } from "@/icons/User"
import { getIconColor } from "@/utils/colors"
import { ROUTES } from "src/constants/routes"



import { Styled } from "./MobileNavbar.styles"

export function MobileNavbar() {
  return (
    <Styled.MobileNavbarContainer>
      <Styled.MobileNavbarList>
        <li>
          <Link to={ROUTES.home}>
            <HomeIcon color={getIconColor([ROUTES.home])} width={26} height={26} />
          </Link>
        </li>
        <li>
          <Link to={ROUTES.menu}>
            <MenuIcon color={getIconColor([ROUTES.menu])} width={26} height={26} />
          </Link>
        </li>
        <li>
          <Link to={ROUTES.account}>
            <UserIcon color={getIconColor([ROUTES.account, ROUTES.login])} width={26} height={26} />
          </Link>
        </li>
        <li>
          <Link to={ROUTES.order}>
            <CartIcon color={getIconColor([ROUTES.order])} width={26} height={26} />
          </Link>
        </li>
      </Styled.MobileNavbarList>
    </Styled.MobileNavbarContainer>
  )
}
