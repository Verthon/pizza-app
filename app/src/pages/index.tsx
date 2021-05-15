import * as React from "react";
import { graphql } from "gatsby";

import { Layout } from "../layouts/Layout/Layout";
import { Coupon } from "../components/Coupon/Coupon";
import { PizzaList } from "../components/PizzaList/PizzaList";
import { Pizzas } from "../api/types";
import { AppProviders } from "../providers/AppProviders/AppProviders";

function IndexPage({ data }: { data: Pizzas }) {
  return (
    <AppProviders>
      <Layout>
        <h1>Mighty Pizza</h1>
        <Coupon discount={50} text="for your next order" />
        <h2>Top this weekend</h2>
        <PizzaList pizzas={data.pizzas.nodes} />
      </Layout>
    </AppProviders>
  );
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
            fluid(maxWidth: 700 maxHeight: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
