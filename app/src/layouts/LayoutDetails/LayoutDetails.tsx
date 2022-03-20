import { Container } from "@/atoms/Container/Container"
import { navigate } from "gatsby"

import { Button } from "../../components/atoms/Button/Button"
import { ChevronRightIcon } from "../../components/icons/ChevronRight"
import { PageTransition } from "../../components/molecules/PageTransition/PageTransition"
import { DETAILS_PAGE_VARIANTS } from "../../constants/config"
import { Styled } from "./LayoutDetails.styles"
import { Props } from "./LayoutDetails.types"

export const LayoutDetails = ({ children, buttonText, title }: Props) => {
  const navigateBack = () => {
    navigate(-1)
  }
  return (
    <PageTransition variants={DETAILS_PAGE_VARIANTS}>
      <Container>
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
      </Container>
    </PageTransition>
  )
}
