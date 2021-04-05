import styled from "styled-components"
import { Theme } from "../../theme/theme"

const Container = styled.div`
  padding: ${({theme}: Theme ) => theme.spacing.md};
`

const Image = styled.img`
  max-height: 267px;
  border-radius: ${({theme}: Theme ) => theme.border.defaultRadius};
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: ${({theme}: Theme ) => theme.spacing.sm} 0;
  }
  span {
    font-size: 16px;
  }
`

export const Styled = {
  Container,
  Image,
  Footer
}