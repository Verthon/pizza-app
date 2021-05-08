import * as React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import { Styled } from "./Pizza.styles";
import { Props } from "./Pizza.types";
import { AppProviders } from "../providers/AppProviders/AppProviders";

export default function SinglePizzaPage({ data: { pizza } }: Props) {
  console.log(pizza);
  return (
    <AppProviders>
      {" "}
      <Styled.Container>
        <Styled.Image fluid={pizza.image.asset.fluid} />
        <Styled.Title>{pizza.name}</Styled.Title>
      </Styled.Container>
    </AppProviders>
  );
}

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      price
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        vegetarian
        id
      }
    }
  }
`;
