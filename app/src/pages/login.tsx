import * as React from "react"
import { LoginForm } from "../components/forms/LoginForm/LoginForm"
import { Heading } from "../components/Heading/Heading"
import { Layout } from "../components/Layout/Layout"

function LoginPage() {
  return (
    <Layout>
      <Heading level={1}>Login page</Heading>
      <p>add your details to login</p>
      <LoginForm />
    </Layout>
  )
}

export default LoginPage
