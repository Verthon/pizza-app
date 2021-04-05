import styled from "styled-components"
import { Theme } from "../../theme/Theme"

const Container = styled.div`
  padding: ${({theme}: Theme ) => theme.spacing.md};
  border-radius: 2px;
`

const Image = styled.img`
  max-height: 267px;
`

export const Styled = {
  Container,
  Image
}