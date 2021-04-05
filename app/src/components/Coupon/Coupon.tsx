import React from "react"

import { theme } from "../../theme/theme";
import { GiftIcon } from "../icons/Gift"
import { Styled } from "./Coupon.styles";
import { Props } from "./Coupon.types";

export const Coupon = ({ discount, text, margin = "0 0 0 0" }: Props) => {
  return (
    <Styled.Container>
      <GiftIcon width={40} height={40} color={theme.colors.primary700} margin={margin}/>
      <Styled.Content>
        <h4>{`${discount} %`}</h4>
        <p>{text}</p>
      </Styled.Content>
    </Styled.Container>
  )
}