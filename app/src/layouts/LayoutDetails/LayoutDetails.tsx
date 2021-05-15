import { navigate } from "gatsby";
import * as React from "react";

import { CartIcon } from "../../components/icons/Cart";
import { ChevronRightIcon } from "../../components/icons/ChevronRight";
import { ROUTES } from "../../constants/routes";
import { DetailsFooter } from "../DetailsFooter/DetailsFooter";
import { Styled } from "./LayoutDetails.styles";
import { Props } from "./LayoutDetails.types";

export const LayoutDetails = ({ children, buttonText, title }: Props) => {
  const navigateBack = () => {
    navigate(-1)
  }
  const navigateToCart = () => {
    navigate(ROUTES.order)
  }
  return (
    <Styled.Container>
      <Styled.Navbar>
        <span onClick={navigateBack}><ChevronRightIcon /></span>
        <p>{title}</p>
        <span onClick={navigateToCart}><CartIcon /></span>
      </Styled.Navbar>
      {children}
      <DetailsFooter buttonText={buttonText} />
    </Styled.Container>
  );
};
