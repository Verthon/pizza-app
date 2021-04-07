import { ITheme } from "./src/theme/theme";

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}