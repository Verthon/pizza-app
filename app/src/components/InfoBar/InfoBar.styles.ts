import styled from "styled-components"

const Container = styled.div`
  border-radius: ${({theme} ) => theme.border.defaultRadius};
  background-color: ${({theme} ) => theme.colors.blueGrey200};
  color: ${({theme} ) => theme.colors.blueGrey700};
  text-align: center;
  padding: ${({theme} ) => theme.spacing.sm};
`

export const Styled = {
  Container
}