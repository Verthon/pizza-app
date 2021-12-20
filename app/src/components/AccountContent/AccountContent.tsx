import { navigate } from "gatsby";

import { ROUTES } from "../../constants/routes";
import { useAppDispatch } from "../../hooks/useAppDispatch/useAppDispatch";
import { useAppState } from "../../hooks/useAppState/useAppState";
import { useFirebase } from "../../hooks/useFirebase/useFirebase";
import { set } from "../../reducers/notifications";
import { Button } from "../Button/Button"

export const AccountContent = () => {

  const isLoggedIn = useAppState((state) => state.auth.user);
  const isLoading = useAppState((state) => state.auth.loading);
  const { logout } = useFirebase();
  const dispatch = useAppDispatch();

  const onUnAuthorized = () => {
    if (typeof window !== `undefined`) {
      navigate(ROUTES.login)
    }
  }
  const onSuccess = () => {
    if (typeof window !== `undefined`) {
      navigate(ROUTES.home)
    }
  }
  const onLogout = async() => {
    try {
      await logout();
      onSuccess()
    } catch (err) {
      dispatch(set({ message: err?.message, type: "error"}))
    }
  }

  if(!isLoggedIn) {
    onUnAuthorized()
    return null
  }
  return (
    <div>
      <p>Account pages</p>
      <Button onClick={onLogout} $loading={isLoading}>Logout</Button>
    </div>
  )
}