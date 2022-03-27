import { Styled } from "./AmountButton.styles"
import { AmountButtonProps } from "./AmountButton.types"

export const AmountButton = ({ pizzaAmount, maxAmount = 5 }: AmountButtonProps) => {
  const hasMinValue = pizzaAmount === 0
  const hasMaxValue = pizzaAmount === maxAmount
  return (
    <Styled.Wrapper>
      <Styled.MinusSignButton hasMinValue={hasMinValue}>-</Styled.MinusSignButton>
      <Styled.Amount>{pizzaAmount}</Styled.Amount>
      <Styled.PlusSignButton hasMaxValue={hasMaxValue}>+</Styled.PlusSignButton>
    </Styled.Wrapper>
  )
}