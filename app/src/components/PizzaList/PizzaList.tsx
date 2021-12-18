import React from "react";
import { PizzaItem } from "../PizzaItem/PizzaItem";
import { Styled } from "./PizzaList.styles";
import type { Props } from "./PizzaList.types";

export const PizzaList = ({ pizzas }: Props) => {
  return (
    <Styled.Container>
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </Styled.Container>
  );
};
