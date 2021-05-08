import * as React from "react";
import { Layout } from "../layouts/Layout/Layout";
import { AppProviders } from "../providers/AppProviders/AppProviders";

// markup
function AboutPage() {
  return (
    <AppProviders>
      <Layout>
        <p>About page</p>
      </Layout>
    </AppProviders>
  );
}

export default AboutPage;
