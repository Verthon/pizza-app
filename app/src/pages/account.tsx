import * as React from "react";
import { Layout } from "../components/Layout/Layout";
import { AppProviders } from "../providers/AppProviders/AppProviders";

function AccountPage() {
  return (
    <AppProviders>
      <Layout>
        <p>Account page</p>
      </Layout>
    </AppProviders>
  );
}

export default AccountPage;
