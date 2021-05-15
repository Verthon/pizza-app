import styled from "styled-components"
import { device } from "../../theme/theme"

const Container = styled.div`
  display: grid;
  @media ${ device.md } {
    grid-template-columns: 300px 300px 300px;
    grid-gap: 1rem;
    grid-auto-flow: column;
    grid-auto-columns: 200px;
  }
`

export const Styled = {
  Container
}