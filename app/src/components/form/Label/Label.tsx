import {Styled} from "./Label.styles"
import {Props} from "./Label.types"

export const Label = ({name, children}: Props) => (
  <Styled.Label name={name}>{children}</Styled.Label>
)
