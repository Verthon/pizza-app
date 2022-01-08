import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import type { ImageStyleProps } from "./PizzaItem.types"
import { mediaQueries } from "../../../theme/theme"

const Container = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.md} 0;
  color: ${({ theme }) => theme.colors.blueGrey800};

  ${mediaQueries("md")`
    padding: 1rem;
  `};

  a {
    color: ${({ theme }) => theme.colors.blueGrey900};
  }
`

const Image = styled(GatsbyImage)<ImageStyleProps>`
  border-radius: ${({ theme }) => theme.border.defaultRadius};
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: ${({ theme }) => theme.spacing.sm} 0;
  }
  span {
    font-size: 1rem;
  }
`

export const Styled = {
  Container,
  Image,
  Footer,
}
