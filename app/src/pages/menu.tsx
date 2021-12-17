import { graphql } from "gatsby";
import * as React from "react";

import { Pizzas } from "../api/types";
import { Layout } from "../layouts/Layout/Layout";
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
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default MenuPage;
