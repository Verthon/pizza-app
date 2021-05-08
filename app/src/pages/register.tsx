import * as React from "react";

import { Heading } from "../components/Heading/Heading";
import { Layout } from "../layouts/Layout/Layout";
import { Text } from "../components/Text/Text";
import { AppProviders } from "../providers/AppProviders/AppProviders";

function RegisterPage() {
  return (
    <AppProviders>
      <Layout>
        <Heading level={1}>Register page</Heading>
        <Text align="center">add your details to register</Text>
      </Layout>
    </AppProviders>
  );
}

export default RegisterPage;
