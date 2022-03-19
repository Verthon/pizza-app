import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import type { ImageStyleProps } from "@/molecules/PizzaItem/PizzaItem.types"
import { mediaQueries } from "@/theme/theme"

import type { Size } from "./PizzaDetailsContent.types"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${mediaQueries("lg")`
    grid-template-columns: repeat(2, 1fr);
  `};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`

const Image = styled(GatsbyImage)<ImageStyleProps>`
  border-radius: ${({ theme }) => theme.border.defaultRadius};
`

const Price = styled.p`
  color: ${({ theme }) => theme.colors.blueGrey800};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  font-weight: bold;
  margin: 0.5rem 0;
`

const SizeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`

const SizeDescription = styled.p`
  color: ${({ theme }) => theme.colors.blueGrey700};
`

const SizeButton = styled.button<Size>`
  background-color: ${(props) => (props.active ? props.theme.colors.primary400 : props.theme.colors.blueGrey200)};
  font-weight: 600;
  border: 0;
  cursor: pointer;
  color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.blueGrey500)};
  padding: 1rem 1.25rem;
  border-radius: 25%;
`

export const Styled = {
  Title,
  Image,
  Price,
  SizeButton,
  SizeWrapper,
  SizeDescription,
  Wrapper,
  Content,
}
