import * as React from "react";
import { MobileNavbar } from "./MobileNavbar";

export function Layout({ children }) {
  return (
    <main className="h-screen w-full flex">
      <MobileNavbar />
      {children}
    </main>
  );
}
