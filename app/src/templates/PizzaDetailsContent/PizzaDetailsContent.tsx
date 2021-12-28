import * as React from "react"

import { LayoutDetails } from "../../layouts/LayoutDetails/LayoutDetails"
import { sizes } from "../../constants/pizza"
import { calculatePizzaPrice, formatPrice } from "../../utils/numbers"

import { Styled } from "./PizzaDetailsContent.styles"
import type { Props } from "./PizzaDetailsContent.types"

const SIZE_IN_CM = {
    S: 25,
    M: 35,
    L: 46,
} as const

export const PizzaDetailsContent = ({ pizza }: Props) => {
    const [activeSize, setActiveSize] = React.useState<keyof typeof sizes>(sizes.M)
    const isSizeActive = (size: keyof typeof sizes) => {
        return activeSize === size
    }
    return (
        <LayoutDetails buttonText="Add to cart" title={pizza.name}>
            <Styled.Image image={pizza.image.asset.gatsbyImageData} alt="" />
            <Styled.Title>{pizza.name}</Styled.Title>
            <Styled.SizeDescription>The diameter: {SIZE_IN_CM[activeSize]} cm</Styled.SizeDescription>
            <Styled.SizeWrapper>
                <Styled.SizeButton active={isSizeActive(sizes.S)} onClick={() => setActiveSize(sizes.S)}>
                    {sizes.S}
                </Styled.SizeButton>
                <Styled.SizeButton active={isSizeActive(sizes.M)} onClick={() => setActiveSize(sizes.M)}>
                    {sizes.M}
                </Styled.SizeButton>
                <Styled.SizeButton active={isSizeActive(sizes.L)} onClick={() => setActiveSize(sizes.L)}>
                    {sizes.L}
                </Styled.SizeButton>
            </Styled.SizeWrapper>
            <Styled.Price>{formatPrice(calculatePizzaPrice(pizza.price, activeSize))}</Styled.Price>
        </LayoutDetails>
    )
}