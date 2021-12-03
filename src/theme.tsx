// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const personalTheme = extendTheme({
  config: config,
  colors: {
    black: "#000",
    white: "#fff",
    mint: {
      "50": "#E6FFFD",
      "100": "#B8FFF9",
      "200": "#8AFEF5",
      "300": "#5DFEF2",
      "400": "#2FFEEE",
      "500": "#02FDEA",
      "600": "#01CBBB",
      "700": "#01988D",
      "800": "#01655E",
      "900": "#00332F",
    },
  },
});

export default personalTheme;
