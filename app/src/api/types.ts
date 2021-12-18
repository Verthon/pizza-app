import { GatsbyImageProps } from "gatsby-image";

export type PizzaNode = {
  id: string;
  name: string;
  slug: {
    current: string;
  };
  toppings: Topping[];
  image: {
    asset: ImageProps;
  };
  price: number;
};

export type Topping = {
  id: string;
  name: string;
  vegetarian: boolean | null;
};

export type Pizzas = {
  pizzas: {
    nodes: PizzaNode[];
  };
};

export type ImageProps = {
  gatsbyImageData: any;
};
