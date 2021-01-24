import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDimmed: string;
      secondary: string;
    };
    fontFamilies: {
      sansSerif: string;
      serif: string;
    };
  }
}
