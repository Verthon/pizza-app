import styled from "styled-components"
import { device } from "../../theme/theme"

const Container = styled.div`
  display: grid;
  @media ${ device.md } {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`

export const Styled = {
  Container
}