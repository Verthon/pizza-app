import * as React from "react"
import { graphql } from "gatsby"
import image from "../assets/images/kelvin-theseira-pizza.jpg"

import { Layout } from "../components/Layout/Layout"


// markup
function IndexPage() {
  return (
    <Layout>
      <div className="container px-4 py-4">
        <h1 className="text-2xl text-center font-semibold text-gray-700">Mighty Pizza</h1>
        <p className="text py-4 text-center text-gray-600">Finest pizza in town</p>
        <img className="rounded" src={image} />
        <h2 className="text-lg text-gray-700 mt-4 font-semibold">Hot pizzas</h2>
      </div>
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
