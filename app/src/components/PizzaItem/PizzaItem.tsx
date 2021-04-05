import React from 'react';
import { PizzaNode } from '../../api/types';
import { Styled } from './PizzaItem.styles';

export function PizzaItem({ pizza }: {pizza: PizzaNode}) {
  return (
    <Styled.Container>
      <p>{pizza.name}</p>
      <Styled.Image src={pizza.image.asset.fluid.src} alt=""/>
    </Styled.Container>
  );
};