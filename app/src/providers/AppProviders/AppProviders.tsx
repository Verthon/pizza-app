import * as React from "react";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import { StoreProvider } from "../StoreProvider/StoreProvider";
import { theme } from "../../theme/theme";
import { GlobalStyle } from "../../theme/GlobalStyles";
import { Props } from "./AppProviders.types";

export const AppProviders = ({ children }: Props) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
};
