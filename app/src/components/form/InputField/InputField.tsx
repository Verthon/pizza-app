import React from "react";
import { Input } from "../Input/Input";

import { Label } from "../Label/Label";

import { Styled } from "./InputField.styles";
import { Props } from "./InputField.types";

export const InputField = ({ name, label, value, onChange, disabled, maxLength, placeholder }: Props) => (
  <Styled.InputField>
    <Label name={name}>{label}</Label>
    <Input name={name} value={value} onChange={onChange} disabled={disabled} maxLength={maxLength} placeholder={placeholder} />
  </Styled.InputField>
)