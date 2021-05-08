import { FluidObject } from "gatsby-image";
import { Topping } from "../api/types";

export type Props = {
  data: {
    pizza: {
      name: string
      price: number,
      image: {
        asset: {
          fluid: FluidObject | FluidObject[]
        }
      }
      toppings: Topping[]
    }
  }
}
