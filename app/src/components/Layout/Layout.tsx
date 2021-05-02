import * as React from "react";

import { Navbar } from "../Navbar/Navbar";
import { Container } from "../Container/Container";
import { Props } from "./Layout.types";

export function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
