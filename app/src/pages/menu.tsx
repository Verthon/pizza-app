import { graphql } from "gatsby";
import * as React from "react";

import { Pizzas } from "../api/types";
import { Layout } from "../components/Layout/Layout";
import { PizzaList } from "../components/PizzaList/PizzaList";
import { AppProviders } from "../providers/AppProviders/AppProviders";

function MenuPage({ data }: { data: Pizzas }) {
  return (
    <AppProviders>
      <Layout>
        <PizzaList pizzas={data.pizzas.nodes} />
      </Layout>
    </AppProviders>
  );
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
`;

export default MenuPage;
