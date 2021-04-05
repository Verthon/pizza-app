import React from 'react';
import { PizzaNode } from '../../api/types';
import { formatPrice } from '../../utils/numbers';
import { Styled } from './PizzaItem.styles';

export function PizzaItem({ pizza }: {pizza: PizzaNode}) {
  return (
    <Styled.Container>
      <Styled.Image src={pizza.image.asset.fluid.src} alt=""/>
      <Styled.Footer>
        <h3>{pizza.name}</h3>
        <span>{formatPrice(pizza.price)}</span>
      </Styled.Footer>
    </Styled.Container>
  );
};