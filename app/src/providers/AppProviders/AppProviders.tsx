import { ThemeProvider } from "styled-components"
import "normalize.css"

import { StoreProvider } from "../StoreProvider/StoreProvider"
import { theme } from "../../theme/theme"
import { GlobalStyle } from "../../theme/GlobalStyles"
import { Props } from "./AppProviders.types"
import { FirebaseProvider } from "../FirebaseProvider/FirebaseProvider"

export const AppProviders = ({ children }: Props) => {
  return (
    <FirebaseProvider>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </StoreProvider>
    </FirebaseProvider>
  )
}
