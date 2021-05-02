import * as React from "react";
import { Layout } from "../components/Layout/Layout";
import { AppProviders } from "../providers/AppProviders/AppProviders";

// markup
function OrderPage() {
  return (
    <AppProviders>
      <Layout>
        <p>order</p>
      </Layout>
    </AppProviders>
  );
}

export default OrderPage;
