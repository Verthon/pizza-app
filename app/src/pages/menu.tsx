import { graphql } from "gatsby"
import * as React from "react"
import { Layout } from "../components/Layout/Layout"

function MenuPage({ data }: {data: unknown}) {
  console.log(data)
  return (
    <Layout>
      <p>menu</p>
    </Layout>
  )
}

// export const query = graphql`
//   query getPizzas {
//     pizzas: allSanityPizza {
//       nodes {
//         name
//         id
//         slug {
//           current 
//         }
//         toppings {
//           id
//           name
//         }
//       }
//     }
//   }

// `

export default MenuPage
