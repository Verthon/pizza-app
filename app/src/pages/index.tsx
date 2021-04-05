import * as React from "react"
import { graphql } from "gatsby"
import image from "../assets/images/kelvin-theseira-pizza.jpg"

import { Layout } from "../components/Layout/Layout"
import { InfoBar } from "../components/InfoBar/InfoBar"
import { Coupon } from "../components/Coupon/Coupon"

// markup
function IndexPage() {
  return (
    <Layout>
        <h1>Mighty Pizza</h1>
        <InfoBar text="250 Straconki, Bielsko - Biala, 43-300" />
        <Coupon discount={50} text="for your next order" />
        <h2>Top this weekend</h2>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "src/assets/images/chad-montano-pizza.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
