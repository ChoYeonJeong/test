import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      mainTx: string;
      hover: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };
    margin: {
      small: string;
      base: string;
      large: string;
    };
    mqSizes: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    layout: {
      flexCenterXY: string;
      flexCenterX: string;
      flexCenterY: string;
      flexColumnY: string;
      spaceBetween: string;
      spaceAround: string;
    };
  }
}
