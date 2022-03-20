import styled, { css } from "styled-components"

const Wrapper = styled.div(
  ({ theme }) => css`
    display: inline-flex;
    align-items: center;
    align-self: center;
    background-color: ${theme.colors.blueGrey200};
    border-radius: ${theme.border.defaultRadius};
    padding: 0.5rem 0;
  `
)
Wrapper.displayName = "AmountButtonWrapper"
const Amount = styled.span``
Amount.displayName = "AmountButtonAmount"

const SignButton = styled.button`
  border: 0;
  background-color: inherit;
  cursor: pointer;
  padding: 0 1rem;
`
SignButton.displayName = "AmountSignButton"

export const Styled = {
  Wrapper,
  Amount,
  SignButton,
}
