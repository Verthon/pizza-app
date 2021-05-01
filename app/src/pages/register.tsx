import * as React from "react"

import { Heading } from "../components/Heading/Heading"
import { Layout } from "../components/Layout/Layout"
import { Text } from "../components/Text/Text"

function RegisterPage() {
  return (
    <Layout>
      <Heading level={1}>Register page</Heading>
      <Text align="center">add your details to register</Text>
    </Layout>
  )
}

export default RegisterPage