import * as React from "react";
import { AccountContent } from "../components/AccountContent/AccountContent";
import { Layout } from "../components/Layout/Layout";
import { AppProviders } from "../providers/AppProviders/AppProviders";

function AccountPage() {
  return (
    <AppProviders>
      <Layout>
        <AccountContent/>
      </Layout>
    </AppProviders>
  );
}

export default AccountPage;
