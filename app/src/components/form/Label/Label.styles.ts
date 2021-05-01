import styled from "styled-components"
import { SProps } from "./Label.types"

const Label = styled.label<SProps>`
  font-size: ${({theme}) => theme.fontSizes.sm};
  color: ${({theme}) => theme.colors.blueGrey800};
`

export const Styled = {
  Label
}