import { ImageProps, Topping } from "../api/types"

export type Props = {
  data: {
    pizza: {
      name: string
      price: number
      image: {
        asset: ImageProps
      }
      toppings: Topping[]
    }
  }
}
