import * as React from 'react';

import { ROUTES } from '../../constants/routes';

import { Styled } from "./Link.styled"
import { Props } from "./Link.types"

export const Link = ( { children, href, route }: Props) => {
  if (href) {
    return <Styled.Anchor href={href}>{ children }</Styled.Anchor>
  }

  return <Styled.Link to={route || ROUTES.home} >{ children }</Styled.Link>
}