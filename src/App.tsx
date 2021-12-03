import { ChakraProvider } from "@chakra-ui/react";
import personalTheme from "./theme";

import Home from "./pages/Home";

export const App = () => (
  <ChakraProvider theme={personalTheme}>
    <Home />
  </ChakraProvider>
);
