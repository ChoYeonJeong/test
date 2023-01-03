import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    main: "#456763",
    secondary: "#9e6763",
    mainTx: "#FFFFFF",
    hover: "#8c8cd8",
  },
  fontSizes: {
    xs: "0.5rem",
    sm: "0.75rem",
    base: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
  },
  margin: {
    small: "20px",
    base: "40px",
    large: "80px",
  },
  mqSizes: {
    mobile: "(max-width: 600px)",
    tablet: "(max-width: 1024px)",
    desktop: "(max-width: 1920px)",
  },
  layout: {
    flexCenterXY:
      "display: flex; justify-content: center; align-items: center;",
    flexCenterX: "display: flex; justify-content: center;",
    flexCenterY: "display: flex; align-items: center;",
    flexColumnY: "display: flex; flex-direction: column; align-items: center;",
    spaceBetween: "display: flex; justify-content: space-between;",
    spaceAround: "display: flex; justify-content: space-around;",
  },
};
