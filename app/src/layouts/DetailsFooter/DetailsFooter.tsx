import * as React from "react";
import { Button } from "../../components/Button/Button";

import { Styled } from "./DetailsFooter.styles";
import { Props } from "./DetailsFooter.types";

export const DetailsFooter = ({ children, buttonText }: Props) => {
  return (
    <Styled.Footer>
      {children}
      <Button $size="large">{buttonText}</Button>
    </Styled.Footer>
  );
};
