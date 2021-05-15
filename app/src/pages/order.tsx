import * as React from "react";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
import { Layout } from "../layouts/Layout/Layout";
import { AppProviders } from "../providers/AppProviders/AppProviders";

function OrderPage() {
  return (
    <AppProviders>
      <Layout>
        <Heading level={1}>Cart</Heading>
        <Button>Checkout</Button>
      </Layout>
    </AppProviders>
  );
}

export default OrderPage;
