import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"

import {InputField} from "../../form/InputField/InputField"
import {Styled} from "./LoginForm.styles"
import {State} from "./LoginForm.types"
import {Button} from "../../Button/Button"
import {useFirebase} from "../../../hooks/useFirebase/useFirebase"
import {useAppDispatch} from "../../../hooks/useAppDispatch/useAppDispatch"
import {set} from "../../../reducers/notifications"
import {ROUTES} from "../../../constants/routes"
import {navigate} from "gatsby"

export const LoginForm = () => {
  const {login} = useFirebase()
  const dispatch = useAppDispatch()

  const schema = z.object({
    email: z.string().email({message: "Invalid email address."}),
    password: z
      .string()
      .min(8, {message: "Password should have at least 8 characters."}),
  })

  const {control, handleSubmit, formState} = useForm<State>({
    resolver: zodResolver(schema),
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: Required<State>) => {
    try {
      await login(data.email, data.password)
      onSuccess()
    } catch (err) {
      dispatch(set({message: err?.message, type: "error"}))
    }
  }

  const onSuccess = () => {
    navigate(ROUTES.account)
  }

  const isDisabled = !formState.isValid && formState.isSubmitting

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputField
        label="Email"
        type="email"
        name="email"
        control={control}
        placeholder="Your email"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        control={control}
        placeholder="Your password"
      />
      <Button
        type="submit"
        disabled={isDisabled}
        $loading={formState.isSubmitting}
      >
        Login
      </Button>
    </Styled.Form>
  )
}
