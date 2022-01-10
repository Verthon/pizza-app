import { Heading } from "@/atoms/Heading/Heading"
import { Link } from "@/atoms/Link/Link"
import { Text } from "@/atoms/Text/Text"

import { Styled } from "./OurServiceBox.styles"
import type { Props } from "./OurServiceBox.types"
import { OurServiceIcon } from "./OurServiceIcon/OurServiceIcon"

export const OurServiceBox = ({ name, description, link, icon }: Props) => {
  return (
    <Styled.Wrapper>
      <OurServiceIcon icon={icon}/>
      <Heading variant="h3" align="left" size="sm">{name}</Heading>
      <Text>{description}</Text>
      <Link route={link}>Read more</Link>
    </Styled.Wrapper>
  )
}
