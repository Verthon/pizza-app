import styled from "styled-components"
import {Theme} from "../../theme/theme"

const Container = styled.div`
  background-color: ${({theme}: Theme) => theme.colors.primary100};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${({theme}: Theme) => theme.spacing.sm};
  border-radius: ${({theme}: Theme) => theme.border.defaultRadius};
  margin: 1rem 0;
  max-width: 420px;

  .emoji {
    font-size: 1.75rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    text-transform: uppercase;
    margin: ${({theme}: Theme) => theme.spacing.xxs} 0;
    color: ${({theme}: Theme) => theme.colors.primary700};
    font-size: ${({theme}: Theme) => theme.fontSizes.title};
  }

  p {
    margin: 0;
    color: ${({theme}: Theme) => theme.colors.primary700};
  }
`

export const Styled = {
  Container,
  Content,
}
