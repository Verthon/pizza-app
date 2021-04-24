import styled from "styled-components"
import { Theme } from "../../../theme/theme"

const Input = styled.input`
  border: 1px solid ${({theme}) => theme.colors.blueGrey300 };
  margin: ${({theme}: Theme ) => theme.spacing.xs} 0 0 0;
  padding: ${({theme}: Theme ) => theme.spacing.xs};
  border-radius: ${({theme}: Theme ) => theme.border.defaultRadius};
`

export const Styled = {
  Input
}