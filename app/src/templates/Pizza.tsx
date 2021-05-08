import * as React from "react";
import { graphql } from "gatsby";

import { Styled } from "./Pizza.styles";
import { Props } from "./Pizza.types";
import { AppProviders } from "../providers/AppProviders/AppProviders";
import { LayoutDetails } from "../layouts/LayoutDetails/LayoutDetails";
import { formatPrice } from "../utils/numbers";
import { sizes } from "../constants/pizza";

export default function SinglePizzaPage({ data: { pizza } }: Props) {
  const [activeSize, setActiveSize] = React.useState(sizes.M);
  const isSizeActive = (size: string) => {
    return activeSize === size
  }
  return (
    <AppProviders>
      <LayoutDetails buttonText="Add to cart" title={pizza.name}>
        <Styled.Image fluid={pizza.image.asset.fluid} />
        <Styled.Title>{pizza.name}</Styled.Title>
        <Styled.SizeWrapper>
          <Styled.SizeButton active={isSizeActive(sizes.S)} onClick={() => setActiveSize(sizes.S)}>{sizes.S}</Styled.SizeButton>
          <Styled.SizeButton active={isSizeActive(sizes.M)} onClick={() => setActiveSize(sizes.M)}>{sizes.M}</Styled.SizeButton>
          <Styled.SizeButton active={isSizeActive(sizes.L)} onClick={() => setActiveSize(sizes.L)}>{sizes.L}</Styled.SizeButton>
        </Styled.SizeWrapper>
        <Styled.Price>{formatPrice(pizza.price)}</Styled.Price>
      </LayoutDetails>
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
