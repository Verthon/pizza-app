import { OurServiceBox } from "../../atoms/OurServiceBox/OurServiceBox"

import { Styled } from "./OurServices.styles"

export const OurServices = () => {
  return (
    <Styled.Container>
      <OurServiceBox title="Best Quality" description="Lorem ipsum" link="test" />
      <OurServiceBox title="Easy to order" description="Create your order with few easy steps" link="test" />
      <OurServiceBox title="Fastest delivery" description="Promise to deliver within 30 minutes with pickup delivery at your footstep" link="test" />
    </Styled.Container>

  )
}
