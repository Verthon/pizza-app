import { graphql } from "gatsby"

import { Pizzas } from "../api/types"
import { Layout } from "../layouts/Layout/Layout"
import { PizzaList } from "../components/molecules/PizzaList/PizzaList"
import { AppProviders } from "../providers/AppProviders/AppProviders"

function MenuPage({ data }: { data: Pizzas }) {
  return (
    <AppProviders>
      <Layout>
        <PizzaList pizzas={data.pizzas.nodes} />
      </Layout>
    </AppProviders>
  )
}

export const query = graphql`
  query getPizzas {
    pizzas: allSanityPizza {
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

export default MenuPage
