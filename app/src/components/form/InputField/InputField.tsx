import {Controller} from "react-hook-form"

import {Input} from "../Input/Input"
import {Label} from "../Label/Label"

import {Styled} from "./InputField.styles"
import {Props} from "./InputField.types"

export const InputField = ({
  name,
  label,
  disabled,
  maxLength,
  placeholder,
  type,
  control,
}: Props) => {
  return (
    <Styled.InputField>
      <Label name={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value, name}, fieldState: {error}}) => (
          <Input
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            error={error}
          />
        )}
        rules={{
          required: true,
        }}
      />
    </Styled.InputField>
  )
}
