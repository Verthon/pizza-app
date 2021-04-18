import React from "react"

import { Styled } from "./Input.styles"
import { Props } from "./Input.types"

export const Input = ({ name, type = "text", value, placeholder, onChange }: Props) => (
  <Styled.Input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
)