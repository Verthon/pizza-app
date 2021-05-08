import * as React from "react";

import { LoginForm } from "../components/forms/LoginForm/LoginForm";
import { Heading } from "../components/Heading/Heading";
import { Layout } from "../layouts/Layout/Layout";
import { Link } from "../components/Link/Link";
import { SocialButton } from "../components/SocialButton/SocialButton";
import { Provider } from "../components/SocialButton/SocialButton.types";
import { Text } from "../components/Text/Text";
import { ROUTES } from "../constants/routes";
import { AppProviders } from "../providers/AppProviders/AppProviders";

function LoginPage() {
  return (
    <AppProviders>
      <Layout>
        <Heading level={1}>Login page</Heading>
        <Text align="center">add your details to login</Text>
        <LoginForm />
        <Text align="center">Forgot your password?</Text>
        <Text align="center">Or login with</Text>
        <SocialButton provider={Provider.google}>
          Login with Google
        </SocialButton>
        <Text align="center">
          Don't have an account? <Link route={ROUTES.register}>Sign up</Link>
        </Text>
      </Layout>
    </AppProviders>
  );
}

export default LoginPage;
