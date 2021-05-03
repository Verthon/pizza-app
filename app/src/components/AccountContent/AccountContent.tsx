import { navigate } from "gatsby";
import * as React from "react"

import { ROUTES } from "../../constants/routes";
import { useAppDispatch } from "../../hooks/useAppDispatch/useAppDispatch";
import { useFirebase } from "../../hooks/useFirebase/useFirebase";
import { set } from "../../reducers/notifications";
import { Button } from "../Button/Button"

export const AccountContent = async() => {

  const { logout } = useFirebase();
  const dispatch = useAppDispatch();

  const onSuccess = () => {
    navigate(ROUTES.home)
  }
  const onLogout = async() => {
    try {
      await logout();
      onSuccess()
    } catch (err) {
      dispatch(set({ message: err?.message, type: "error"}))
    }
  }
  return (
    <div>
      <p>Account pages</p>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  )
}