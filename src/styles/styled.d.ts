import "styled-components";
import { Theme } from "./theme/theme.modal";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: Theme;
  }
}
