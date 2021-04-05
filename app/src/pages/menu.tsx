import { graphql } from "gatsby"
import * as React from "react"
import { Pizzas } from "../api/types"
import { Layout } from "../components/Layout/Layout"
import { PizzaList } from "../components/PizzaList/PizzaList"

function MenuPage({ data }: {data: Pizzas}) {
  console.log(data.pizzas)
  return (
    <Layout>
      <PizzaList pizzas={data.pizzas.nodes} />
    </Layout>
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
          fluid(maxWidth: 400, maxHeight: 207) {
            base64
            srcWebp
            srcSetWebp
            src
          }
        }
      }
    }
  }
}
`

export default MenuPage
