import { sizes } from "src/constants/pizza"
import { PizzaDetails } from "../../api/types"

export type Props = PizzaDetails

export type Size = {
  active: boolean
}

export type PizzaSizeProps = {
  activeSize: keyof typeof sizes
  setActiveSize: React.Dispatch<React.SetStateAction<PizzaSizeProps["activeSize"]>>
}

export type QuickFactsProps = {
  vegetarian: PizzaDetails["pizza"]["vegetarian"]
  sliceCalories: PizzaDetails["pizza"]["sliceCalories"]
}
