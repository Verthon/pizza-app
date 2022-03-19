import { graphql } from "gatsby"

import { Props } from "./Pizza.types"
import { AppProviders } from "../providers/AppProviders/AppProviders"
import { PizzaDetailsContent } from "./PizzaDetailsContent/PizzaDetailsContent"

export default function SinglePizzaPage({ data: { pizza } }: Props) {
  console.log(pizza);
  return (
    <AppProviders>
      <PizzaDetailsContent pizza={pizza} />
    </AppProviders>
  )
}

export const query = graphql`
  query ($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      price
      image {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, height: 500)
        }
      }
      toppings {
        name
        vegetarian
        id
      },
      shortDescription
      longDescription
    }
  }
`
