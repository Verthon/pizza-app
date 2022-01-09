import { CartIcon } from "../../../icons/Cart"
import { DeliveryIcon } from "../../../icons/Delivery"
import { ShieldCheck } from "../../../icons/ShieldCheck"

import type { Props as OurServiceBoxProps } from "../OurServiceBox.types"
import { Styled } from "./OurServiceIcon.styles"

type Props = {
  icon: OurServiceBoxProps["icon"]
}

export const OurServiceIcon = ({ icon }: Props) => {
  const assertNever = () => null;

  return (
    <Styled.Wrapper>
      {(() => {
        switch (icon) {
          case "quality":
            return <Styled.Container><ShieldCheck /></Styled.Container>
          case "order":
            return <Styled.Container><CartIcon /></Styled.Container>
          case "delivery":
            return <Styled.Container><DeliveryIcon /></Styled.Container>
          default:
            assertNever()
        }
      })()}
    </Styled.Wrapper>
  )
}