import { PizzaList } from "../../components/molecules/PizzaList/PizzaList"
import { Layout } from "../../layouts/Layout/Layout"

import type { Props } from "./HomeContent.types"

export const HomeContent = ({ pizzas }: Props) => {
    return <Layout>
    <h1>Mighty Pizza</h1>
    <h2>Top this weekend</h2>
    <PizzaList pizzas={pizzas.nodes} />
  </Layout>
}