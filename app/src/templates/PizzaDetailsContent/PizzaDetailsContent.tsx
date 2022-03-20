import * as React from "react"

import { LayoutDetails } from "../../layouts/LayoutDetails/LayoutDetails"
import { sizes } from "../../constants/pizza"
import { calculatePizzaPrice, formatPrice } from "../../utils/numbers"

import { Styled } from "./PizzaDetailsContent.styles"
import type { PizzaSizeProps, Props, QuickFactsProps } from "./PizzaDetailsContent.types"
import { CheckCircleIcon } from "@/icons/CheckCircle"
import { FireIcon } from "@/icons/Fire"
import { theme } from "@/theme/theme"
import SinglePizzaPage from "../Pizza"
import { AmountButton } from "@/atoms/AmountButton/AmountButton"

const SIZE_IN_CM = {
  S: 25,
  M: 35,
  L: 46,
} as const

const PizzaSize = ({ activeSize, setActiveSize }: PizzaSizeProps) => {
  const isSizeActive = (size: keyof typeof sizes) => {
    return activeSize === size
  }
  return (
    <Styled.SizeWrapper>
      <Styled.SizeDescription>The diameter: {SIZE_IN_CM[activeSize]} cm</Styled.SizeDescription>
      <Styled.SizeButtonsWrapper>
        <Styled.SizeButton active={isSizeActive(sizes.S)} onClick={() => setActiveSize(sizes.S)}>
          {sizes.S}
        </Styled.SizeButton>
        <Styled.SizeButton active={isSizeActive(sizes.M)} onClick={() => setActiveSize(sizes.M)}>
          {sizes.M}
        </Styled.SizeButton>
        <Styled.SizeButton active={isSizeActive(sizes.L)} onClick={() => setActiveSize(sizes.L)}>
          {sizes.L}
        </Styled.SizeButton>
      </Styled.SizeButtonsWrapper>
    </Styled.SizeWrapper>
  )
}

const QuickFact = ({ sliceCalories, vegetarian }: QuickFactsProps) => {
  return (
    <Styled.QuickFactWrapper>
      {vegetarian ? <Styled.QuickFact>
        <CheckCircleIcon />
        <span>Vegetarian</span>
      </Styled.QuickFact> : null}
      <Styled.QuickFact>
        <FireIcon color={theme.colors.danger500} />
        <span>Slice - {sliceCalories} kcal</span>
      </Styled.QuickFact>
    </Styled.QuickFactWrapper>
  )
}

export const PizzaDetailsContent = ({ pizza }: Props) => {
  const [activeSize, setActiveSize] = React.useState<keyof typeof sizes>(sizes.M)
  const [pizzaAmount, setPizzaAmount] = React.useState(0);

  return (
    <LayoutDetails buttonText="Add to cart" title={pizza.name}>
      <Styled.Wrapper>
        <Styled.Image image={pizza.image.asset.gatsbyImageData} alt="" />
        <Styled.Content>
          <Styled.Title>{pizza.name}</Styled.Title>
          <QuickFact sliceCalories={pizza.sliceCalories} vegetarian={pizza.vegetarian} />
          <Styled.Description>{pizza.longDescription}</Styled.Description>
          <PizzaSize activeSize={activeSize} setActiveSize={setActiveSize} />
          <AmountButton pizzaAmount={pizzaAmount} setPizzaAmount={setPizzaAmount}/>
          <Styled.Price>{formatPrice(calculatePizzaPrice(pizza.price, activeSize))}</Styled.Price>
        </Styled.Content>
      </Styled.Wrapper>
    </LayoutDetails>
  )
}
