export type PizzaNode = {
  id: string,
  name: string,
  slug: {
    current: string,
  }
  toppings: Topping[],
  image: Image,
  price: number,
}

export type Topping = {
  id: string,
  name: string
}

export type Image = {
  asset: {
    fluid: {
      base64: string,
      src: string,
      srcSetWebp: string,
      srcWebp: string,
    }
  }
}

export type Pizzas = {
  pizzas: {
    nodes: PizzaNode[],
  }
}