import React from "react";

import { Styled } from "./InfoBar.styles";
import { Props } from "./InfoBar.types";

export const InfoBar = ({ text }: Props) => {
  return <Styled.Container>{text}</Styled.Container>;
};
