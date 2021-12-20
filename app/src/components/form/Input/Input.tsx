import { ErrorMessage } from "../ErrorMessage/ErrorMessage"

import { Styled } from "./Input.styles"
import { Props } from "./Input.types"

export const Input = ({ name, type = "text", value, placeholder, onChange, error }: Props) => (
  <>
    <Styled.Input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    <ErrorMessage error={error} />
  </>
)