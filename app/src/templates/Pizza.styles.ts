import styled from "styled-components"
import Img from "gatsby-image"

import { ImageProps } from "../api/types"

const Container = styled.div`
  margin: 2rem;
`

const Title = styled.h1`

`

const Image = styled(Img)<ImageProps>`
  border-radius: ${({theme}) => theme.border.defaultRadius};
`

export const Styled = {
  Container,
  Title,
  Image
}