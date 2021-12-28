export type Size = {
  active: boolean
}

import { ImageProps, Topping } from "../../api/types"

export type Props = {
  pizza: {
    name: string
    price: number
    image: {
      asset: ImageProps
    }
    toppings: Topping[]
  }
}
