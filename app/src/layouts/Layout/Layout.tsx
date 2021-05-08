import * as React from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import { Container } from "../../components/Container/Container";
import { Props } from "./Layout.types";
import { InfoBar } from "../../components/InfoBar/InfoBar";
import { useAppState } from "../../hooks/useAppState/useAppState";

export function Layout({ children }: Props) {
  const notificationMessage = useAppState((state) => state.notifications.message);
  const notificationType = useAppState((state) => state.notifications.type);

  return (
    <> 
      <InfoBar message={notificationMessage} type={notificationType} />
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
