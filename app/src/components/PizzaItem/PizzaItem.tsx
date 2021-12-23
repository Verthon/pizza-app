import {formatPrice} from "../../utils/numbers"
import {Link} from "../Link/Link"
import {Styled} from "./PizzaItem.styles"
import type {Props} from "./PizzaItem.types"

export function PizzaItem({pizza}: Props) {
  return (
    <Styled.Container>
      <Link route={`/pizza/${pizza.slug.current}`}>
        <Styled.Image image={pizza.image.asset.gatsbyImageData} alt="" />
        <Styled.Footer>
          <h3>{pizza.name}</h3>
          <span>{formatPrice(pizza.price)}</span>
        </Styled.Footer>
      </Link>
    </Styled.Container>
  )
}
