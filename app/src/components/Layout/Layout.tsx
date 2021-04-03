import * as React from "react"
import { ThemeProvider } from "styled-components"
import "normalize.css"

import { MobileNavbar } from "../MobileNavbar/MobileNavbar"
import { theme } from "../../theme/Theme"
import { GlobalStyle } from "../../theme/GlobalStyles"
import { Props } from "./Layout.types"

export function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main className="h-screen w-full">
        <MobileNavbar />
        {children}
      </main>
    </ThemeProvider>
  );
}
