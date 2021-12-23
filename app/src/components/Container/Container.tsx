import {Styled} from "../Container/Container.styles"
import {Props} from "./Container.types"

export const Container = ({children}: Props) => {
  return <Styled.Container>{children}</Styled.Container>
}
