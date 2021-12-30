import { createGlobalStyle, keyframes } from "styled-components"

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    padding-bottom: env(safe-area-inset-bottom);
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .navbar-desktop-active {
    font-weight: 600;
    position: relative;
  }

  .navbar-desktop-active::before {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    content: '\\25CF';
    width: 100%;
    height: 15px;
    bottom: -10px;
    font-size: 10px;
    transition: all 1s ease-in-out; 
  }
`
