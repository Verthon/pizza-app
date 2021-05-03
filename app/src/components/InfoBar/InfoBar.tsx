import React from "react";

import { useAppState } from "../../hooks/useAppState/useAppState";
import { useAppDispatch } from "../../hooks/useAppDispatch/useAppDispatch";
import { hide, show } from "../../reducers/notifications";
import { Styled } from "./InfoBar.styles";
import { Props } from "./InfoBar.types";

const DELAY = 6000

export const InfoBar = ({ message, type = "default", duration = DELAY }: Props) => {
  const isActive = useAppState((state) => state.notifications.active);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if(message) {
      dispatch(show({ message, duration }))
    }
    const timer = setTimeout(() => dispatch(hide()), duration);
    return () => clearTimeout(timer);
  }, [message])

  return isActive ? <Styled.Container type={type}>{message}</Styled.Container> : null;
};
