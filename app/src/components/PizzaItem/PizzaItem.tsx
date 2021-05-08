import React from "react";

import { PizzaNode } from "../../api/types";
import { formatPrice } from "../../utils/numbers";
import { Link } from "../Link/Link";
import { Styled } from "./PizzaItem.styles";

export function PizzaItem({ pizza }: { pizza: PizzaNode }) {
  return (
    <Styled.Container>
      <Link route={`/pizza/${pizza.slug.current}`}>
        <Styled.Image fluid={pizza.image.asset?.fluid} alt="" />
        <Styled.Footer>
          <h3>{pizza.name}</h3>
          <span>{formatPrice(pizza.price)}</span>
        </Styled.Footer>
      </Link>
    </Styled.Container>
  );
}
