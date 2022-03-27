import styled, { css } from "styled-components"

import { AmountButtonStylesProps } from "./AmountButton.types"

const Wrapper = styled.div(
  ({ theme }) => css`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    background-color: ${theme.colors.blueGrey200};
    border-radius: ${theme.border.defaultRadius};
    padding: 0.5rem 0;
  `
)
Wrapper.displayName = "AmountButtonWrapper"
const Amount = styled.span``
Amount.displayName = "AmountButtonAmount"

const MinusSignButton = styled.button<AmountButtonStylesProps>(
  ({ theme, hasMinValue }) => css`
    border: 0;
    background-color: inherit;
    cursor: ${hasMinValue ? "not-allowed" : "pointer"};
    padding: 0 1rem;
    color: ${hasMinValue ? theme.colors.blueGrey400 : "inherit"};
  `
)
MinusSignButton.displayName = "AmountMinusSignButton"

const PlusSignButton = styled.button<AmountButtonStylesProps>(
  ({ theme, hasMaxValue }) => css`
    border: 0;
    background-color: inherit;
    cursor: pointer;
    cursor: ${hasMaxValue ? "not-allowed" : "pointer"};
    padding: 0 1rem;
    color: ${hasMaxValue ? theme.colors.blueGrey400 : "inherit"};
  `
)
PlusSignButton.displayName = "AmountPlusSignButton"

export const Styled = {
  Wrapper,
  Amount,
  MinusSignButton,
  PlusSignButton,
}
