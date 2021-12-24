import { graphql } from "gatsby"

import { Layout } from "../layouts/Layout/Layout"
import { InfoBar } from "../components/molecules/InfoBar/InfoBar"
import { Coupon } from "../components/atoms/Coupon/Coupon"
import { PizzaList } from "../components/molecules/PizzaList/PizzaList"
import { Pizzas } from "../api/types"
import { AppProviders } from "../providers/AppProviders/AppProviders"

function IndexPage({ data }: { data: Pizzas }) {
  return (
    <AppProviders>
      <Layout>
        <h1>Mighty Pizza</h1>
        <InfoBar message="250 Straconki, Bielsko - Biala, 43-300" />
        <Coupon discount={50} text="for your next order" />
        <h2>Top this weekend</h2>
        <PizzaList pizzas={data.pizzas.nodes} />
      </Layout>
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
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default IndexPage
