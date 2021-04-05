import styled from "styled-components"
import { Theme } from "../../theme/theme"

const Container = styled.div`
  border-radius: ${({theme}: Theme ) => theme.border.defaultRadius};
`

export const Styled = {
  Container
}