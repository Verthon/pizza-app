import { Styled } from "./Text.styles"

import { Props } from "./Text.types"

export const Text = ({ variant = "p", align = "left", children }: Props) => {
  return (
    <Styled.Text as={variant} align={align}>
      {children}
    </Styled.Text>
  )
}
