import * as React from "react";
import styled from "styled-components";

import { theme } from "../../theme/theme";

import { Props } from "./Types";

const Container = styled.div<Props>`
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  display: inline-block;
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: calc(${(props) => props.width}px - 4px);
    height: calc(${(props) => props.width}px - 4px);
    margin: calc(${(props) => props.width}px * 0.1);
    border: calc(${(props) => props.width}px * 0.1) solid ${(props) => props.color};
    border-radius: 50%;
    animation: lds-ring 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.color} transparent transparent transparent;
  }

  &div:nth-child(1) {
    animation-delay: -0.45s;
  }
  &div:nth-child(2) {
    animation-delay: -0.3s;
  }
  &div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const Spinner = ({
  width = 80,
  height = 80,
  color = theme.colors.iconColor,
}: Props) => {
  return (
    <Container width={width} height={height} color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};
