import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import type { ImageStyleProps } from "@/molecules/PizzaItem/PizzaItem.types"
import { mediaQuery } from "@/theme/theme"
import { Text } from "@/atoms/Text/Text"

import type { Size } from "./PizzaDetailsContent.types"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 2rem 0;
  ${mediaQuery("lg")} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin: 10rem 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1(
  ({ theme }) => css`
    font-size: ${theme.fontSizes["2x"]};
    margin: 1rem 0 0 0;
  `
)

const Image = styled(GatsbyImage)<ImageStyleProps>(
  ({ theme }) => css`
    border-radius: ${theme.border.defaultRadius};
  `
)

const Price = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.blueGrey800};
    font-size: ${theme.fontSizes.xl};
    text-align: center;
    font-weight: bold;
    margin: 0 2rem 0 0;

    ${mediaQuery("lg")} {
      text-align: left;
      margin: 0 2rem 0 0;
    }
  `
)

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 1rem 0;
  ${mediaQuery("lg")} {
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    margin: 2rem 0 0 0;
  }
`

const SizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQuery("lg")} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 30rem;
  }
`

const SizeButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 25rem;
  min-width: 20rem;
`

const SizeDescription = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.blueGrey700};
    text-align: center;
  `
)

const SizeButton = styled.button<Size>(
  ({ theme, active }) => css`
    background-color: ${active ? theme.colors.primary400 : theme.colors.blueGrey200};
    font-weight: 600;
    border: 0;
    cursor: pointer;
    color: ${active ? theme.colors.white : theme.colors.blueGrey500};
    padding: 1rem 1.25rem;
    border-radius: 25%;
  `
)

const Description = styled(Text)`
  max-width: 30rem;
`

const QuickFactWrapper = styled.div(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    display: flex;
    margin: 1rem 0 0 0;

    & span {
      margin: 0 0 0 0.25rem;
    }
  `
)

QuickFactWrapper.displayName = "PizzaDetailsQuickFactWrapper"

const QuickFact = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 1rem 0 0;
  font-size: ;
`
QuickFact.displayName = "PizzaDetailsQuickFact"

Title.displayName = "PizzaDetailsTitle"
Image.displayName = "PizzaDetailsImage"
Price.displayName = "PizzaDetailsPrice"
SizeButton.displayName = "PizzaDetailsSizeButton"
SizeWrapper.displayName = "PizzaDetailsSizeWrapper"
SizeDescription.displayName = "PizzaDetailsSizeDescription"
SizeButtonsWrapper.displayName = "PizzaDetailsSizeButtonsWrapper"
Wrapper.displayName = "PizzaDetailsWrapper"
Content.displayName = "PizzaDetailsContent"
Description.displayName = "PizzaDetailsDescription"
PriceWrapper.displayName = "PizzaDetailsPriceWrapper"

export const Styled = {
  Title,
  Image,
  Price,
  SizeButton,
  SizeWrapper,
  SizeDescription,
  SizeButtonsWrapper,
  Wrapper,
  Content,
  Description,
  QuickFactWrapper,
  QuickFact,
  PriceWrapper,
}
