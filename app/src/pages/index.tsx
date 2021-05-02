import * as React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout/Layout";
import { InfoBar } from "../components/InfoBar/InfoBar";
import { Coupon } from "../components/Coupon/Coupon";
import { PizzaList } from "../components/PizzaList/PizzaList";
import { Pizzas } from "../api/types";
import { AppProviders } from "../providers/AppProviders/AppProviders";

function IndexPage({ data }: { data: Pizzas }) {
  return (
    <AppProviders>
      <Layout>
        <h1>Mighty Pizza</h1>
        <InfoBar text="250 Straconki, Bielsko - Biala, 43-300" />
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
`;

export default IndexPage;
