import { LoginForm } from "../components/organisms/LoginForm/LoginForm"
import { Heading } from "../components/atoms/Heading/Heading"
import { Layout } from "../layouts/Layout/Layout"
import { Link } from "../components/atoms/Link/Link"
import { SocialButton } from "../components/atoms/SocialButton/SocialButton"
import { Text } from "../components/atoms/Text/Text"
import { ROUTES } from "../constants/routes"
import { AppProviders } from "../providers/AppProviders/AppProviders"

function LoginPage() {
  return (
    <AppProviders>
      <Layout>
        <Heading level={1}>Login page</Heading>
        <Text align="center">add your details to login</Text>
        <LoginForm />
        <Text align="center">Forgot your password?</Text>
        <Text align="center">Or login with</Text>
        <SocialButton provider="google">Login with Google</SocialButton>
        <Text align="center">
          Don&apos;t have an account? <Link route={ROUTES.register}>Sign up</Link>
        </Text>
      </Layout>
    </AppProviders>
  )
}

export default LoginPage
