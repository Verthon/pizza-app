import React from "react";
import { PizzaNode } from "../../api/types";
import { PizzaItem } from "../PizzaItem/PizzaItem";
import { Styled } from "./PizzaList.styles";

export const PizzaList = ({ pizzas }: { pizzas: PizzaNode[] }) => {
  return (
    <Styled.Container>
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </Styled.Container>
  );
};
