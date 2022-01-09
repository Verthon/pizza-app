import styled from "styled-components"

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary700};
`

const Container = styled.span`
  display: inline-flex;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary100};
  border-radius: 50%;
  svg {
    stroke: ${({ theme }) => theme.colors.primary800};
  }
`

export const Styled = {
  Wrapper,
  Container,
}
