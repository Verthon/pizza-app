import { graphql } from "gatsby"

import { AppProviders } from "../providers/AppProviders/AppProviders"
import { HomeContent } from "../templates/HomeContent/HomeContent"
import type { HomePageProps } from "../templates/HomeContent/HomeContent.types"

function IndexPage({ data }: HomePageProps) {
  return (
    <AppProviders>
      <HomeContent pizzas={data.pizzas} />
    </AppProviders>
  )
}

export const query = graphql`
  query getTopPizzas {
    pizzas: allSanityPizza(filter: { hot: { eq: true } }) {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
          vegetarian
        }
        price
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, height: 300)
          }
        }
      }
    }
  }
`

export default IndexPage
