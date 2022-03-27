export type AmountButtonProps = {
  pizzaAmount: number
  setPizzaAmount: React.Dispatch<React.SetStateAction<number>>
  maxAmount?: number
}

export type AmountButtonStylesProps = {
  hasMinValue?: boolean
  hasMaxValue?: boolean
}