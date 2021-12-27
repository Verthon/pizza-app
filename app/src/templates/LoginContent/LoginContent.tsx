
import { Heading } from "../../components/atoms/Heading/Heading"
import { Link } from "../../components/atoms/Link/Link"
import { SocialButton } from "../../components/atoms/SocialButton/SocialButton"
import { LoginForm } from "../../components/organisms/LoginForm/LoginForm"
import { ROUTES } from "../../constants/routes"
import { Layout } from "../../layouts/Layout/Layout"
import { Text } from "../../components/atoms/Text/Text"

import { Styled } from "./LoginContent.styles"

export const LoginContent = () => {
    return <Layout>
        <Styled.Wrapper>
            <Heading level={1}>Login page</Heading>
            <Text align="center">add your details to login</Text>
            <LoginForm />
            <Text align="center">Forgot your password?</Text>
            <Text align="center">Or login with</Text>
            <SocialButton provider="google">Login with Google</SocialButton>
            <Text align="center">
                Don&apos;t have an account? <Link route={ROUTES.register}>Sign up</Link>
            </Text>
        </Styled.Wrapper>
    </Layout>
}