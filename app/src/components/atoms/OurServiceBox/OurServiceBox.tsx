import { Text } from "../../../components/atoms/Text/Text"
import { Heading } from "../Heading/Heading"
import { Link } from "../Link/Link"

import { Styled } from "./OurServiceBox.styles"
import type { Props } from "./OurServiceBox.types"

export const OurServiceBox = ({ title, description, link }: Props) => {
  return (
    <Styled.Wrapper>
      <Heading variant="h3" align="left" size="sm">{title}</Heading>
      <Text>{description}</Text>
      <Link route={link}>Read more</Link>
    </Styled.Wrapper>
  )
}
