import {Styled} from "./SocialButton.styles"
import {Props} from "./SocialButton.types"

export const SocialButton = ({children, provider}: Props) => {
  return <Styled.Button provider={provider}>{children}</Styled.Button>
}
