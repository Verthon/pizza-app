import styled from "styled-components"
import Img from "gatsby-image"
import { ImageProps } from "../../api/types"

const Container = styled.div`
  padding: ${({theme} ) => theme.spacing.md} 0;
  color: ${({theme}) => theme.colors.blueGrey800};

  a {
    color: ${({theme}) => theme.colors.blueGrey900};
  }
`

const Image = styled(Img)<ImageProps>`
  border-radius: ${({theme} ) => theme.border.defaultRadius};
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: ${({theme} ) => theme.spacing.sm} 0;
  }
  span {
    font-size: 1rem;
  }
`

export const Styled = {
  Container,
  Image,
  Footer
}