import { Heading } from "../../components/atoms/Heading/Heading"
import { PizzaList } from "../../components/molecules/PizzaList/PizzaList"
import { OurServices } from "../../components/organisms/OurServices/OurServices"
import { Layout } from "../../layouts/Layout/Layout"

import { Styled } from "./HomeContent.styles"
import type { Props } from "./HomeContent.types"

export const HomeContent = ({ pizzas }: Props) => {
  return <Layout>
    <Styled.Wrapper>
      <Styled.MobileHeading variant="h1">Crustica</Styled.MobileHeading>
      <Heading variant="h2">Top this weekend</Heading>
      <PizzaList pizzas={pizzas.nodes} />
      <OurServices />
    </Styled.Wrapper>

  </Layout>
}