import * as React from "react"
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { InputField } from "../../form/InputField/InputField"
import { Styled } from "./LoginForm.styles"
import { State } from "./LoginForm.types";
import { Button } from "../../Button/Button";

export const LoginForm = () => {

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
  });

  const { control, handleSubmit } = useForm<State>({
    resolver: zodResolver(schema),
    reValidateMode: 'onChange',
  });

  const [form, setForm] = React.useState<State>({
    email: "",
    password: ""
  });

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      [name]: value
    })
  }

  const onSubmit = (data: State) => {
    console.log(data);
  }

  return (
    <Styled.Form onSubmit={handleSubmit((onSubmit))} noValidate>
      <Controller
        render={() => <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="john.doe@mail.test"
        />}
        control={control}
        rules={{
          required: true,
        }}
        name="email"
      />
      <InputField label="Password" type="password" name="password" value={form.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInput(e)} />
      <Button type="submit">Login</Button>
    </Styled.Form>
  )
}