import { ChakraProvider, Flex } from "@chakra-ui/react";
import personalTheme from "./theme";

/* Components */
import Home from "./pages/Home";
import Background from "./components/Background";

export const App = () => (
  <ChakraProvider theme={personalTheme}>
    <Flex>
      <Background />
      <Home />
    </Flex>
  </ChakraProvider>
);
