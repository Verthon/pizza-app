import styled from "styled-components"
import { ITheme } from "../../theme/theme"
import { Variant } from "./Button.types"

const Button = styled.button`
  background-color: ${({theme, variant}: { theme: ITheme, variant: Variant } ) => {
    if(variant === Variant.primary) {
      return theme.colors.primary
    }


  }}
`

export const Styled = {
  Button
}