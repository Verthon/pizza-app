import styled from "styled-components"

const Container = styled.div`
  font-size: ${({theme}) => theme.fontSizes.sm};
  color: ${({theme}) => theme.colors.warning};
  margin: 0.5rem 0 0 0;
`

export const Styled = {
  Container,
}
