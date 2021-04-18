import styled from "styled-components"
import { SProps } from "./Label.types"

const Label = styled.label<SProps>`
  font-size: ${({theme}) => theme.fontSizes.regular}
`

export const Styled = {
  Label
}