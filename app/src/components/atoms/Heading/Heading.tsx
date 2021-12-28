import { Props } from "./Heading.types"
import { Styled } from "./Heading.styles"

export const Heading = ({ variant = "h1", children, size = "md" }: Props) => {
  return (
    <Styled.Header as={variant} size={size}>
      {children}
    </Styled.Header>
  )
}
