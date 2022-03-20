import { Styled } from "./AmountButton.styles"
import { AmountButtonProps } from "./AmountButton.types"

export const AmountButton = ({ pizzaAmount, setPizzaAmount }: AmountButtonProps) => {
  return (
    <Styled.Wrapper>
      <Styled.SignButton>-</Styled.SignButton>
      <Styled.Amount>{pizzaAmount}</Styled.Amount>
      <Styled.SignButton>+</Styled.SignButton>
    </Styled.Wrapper>
  )
}