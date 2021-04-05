import styled from "styled-components"
import { Theme } from "../../theme/theme"

const Container = styled.div`
  border-radius: ${({theme}: Theme ) => theme.border.defaultRadius};
  background-color: ${({theme}: Theme ) => theme.colors.blueGrey200};
  color: ${({theme}: Theme ) => theme.colors.blueGrey600};
  text-align: center;
  padding: ${({theme}: Theme ) => theme.spacing.sm};
`

export const Styled = {
  Container
}