import styled from "styled-components"

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.blueGrey300};
  margin: ${({ theme }) => theme.spacing.xs} 0 0 0;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.border.defaultRadius};
  background-color: ${({ theme }) => theme.colors.grey300};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.border.defaultRadius};
  }
`

export const Styled = {
  Input,
}
