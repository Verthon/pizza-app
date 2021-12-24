import { Styled } from "./Container.styles"
import { Props } from "./Container.types"

export const Container = ({ children }: Props) => {
  return <Styled.Container>{children}</Styled.Container>
}
