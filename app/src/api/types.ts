export type PizzaNode = {
  id: string
  name: string
  slug: {
    current: string
  }
  toppings: Topping[]
  image: {
    asset: ImageProps
  }
  price: number,
}

export type Topping = {
  id: string
  name: string
  vegetarian: boolean | null
}

export type Pizzas = {
  pizzas: {
    nodes: PizzaNode[]
  }
}

export type ImageProps = {
  // any till there will be correct type from GatsbyPlugin
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gatsbyImageData: any
}

export type PizzaDetails = {
  pizza: {
    name: string
    price: number
    image: {
      asset: ImageProps
    }
    toppings: Topping[]
    shortDescription: string
    longDescription: string
    sliceCalories?: number
    vegetarian?: boolean
  }
}
