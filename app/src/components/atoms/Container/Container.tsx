import { Styled } from "./Container.styles"
import type { ContainerProps } from "./Container.types"

export const Container = ({ children }: ContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>
}
