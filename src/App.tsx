import { ChakraProvider, Flex } from "@chakra-ui/react";
import personalTheme from "./theme";

/* Components */
import Home from "./pages/Home";
import Background from "./components/Background";
import About from "./pages/About";

export const App = () => {
  return (
    <ChakraProvider theme={personalTheme}>
      <Flex justifyContent="center">
        <Flex direction="column" w="50vw">
          <Background />
        </Flex>
        <Flex direction="column" w="50vw" bg="black">
          <Home />
          <About />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
