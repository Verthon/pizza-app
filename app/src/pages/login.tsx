import * as React from "react"
import { Heading } from "../components/Heading/Heading"
import { Layout } from "../components/Layout/Layout"

// markup
function LoginPage() {
  return (
    <Layout>
      <Heading level={1}>Login page</Heading>
      <p>add your details to login</p>
    </Layout>
  )
}

export default LoginPage
