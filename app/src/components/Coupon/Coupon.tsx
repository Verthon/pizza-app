import { theme } from "../../theme/theme"
import { GiftIcon } from "../icons/Gift"
import { Styled } from "./Coupon.styles"
import { Props } from "./Coupon.types"

export const Coupon = ({ discount, text }: Props) => {
  return (
    <Styled.Container>
      <GiftIcon width={40} height={40} color={theme.colors.primary700} />
      <span className="emoji" role="img">
        💝
      </span>
      <span className="emoji" role="img">
        🎁
      </span>
      <Styled.Content>
        <h4>{`${discount} %`}</h4>
        <p>{text}</p>
      </Styled.Content>
    </Styled.Container>
  )
}
