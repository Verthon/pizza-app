import { navigate } from "gatsby"

import { Button } from "../../components/atoms/Button/Button"
import { ChevronRightIcon } from "../../components/icons/ChevronRight"
import { Styled } from "./LayoutDetails.styles"
import { Props } from "./LayoutDetails.types"

export const LayoutDetails = ({ children, buttonText, title }: Props) => {
  const navigateBack = () => {
    navigate(-1)
  }
  return (
    <Styled.Container>
      <Styled.Navbar>
        <span onClick={navigateBack}>
          <ChevronRightIcon />
        </span>
        <p>{title}</p>
        <div></div>
      </Styled.Navbar>
      {children}
      <Styled.Footer>
        <Button $size="large">{buttonText}</Button>
      </Styled.Footer>
    </Styled.Container>
  )
}
