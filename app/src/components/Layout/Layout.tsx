import * as React from "react";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import { Navbar } from "../Navbar/Navbar";
import { Container } from "../Container/Container";
import { theme } from "../../theme/Theme";
import { GlobalStyle } from "../../theme/GlobalStyles";
import { Props } from "./Layout.types";

export function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Container>{children}</Container>
    </ThemeProvider>
  );
}
