import { Text, Stack } from "@chakra-ui/react";

import Emoji from "../components/Emoji";

const About = () => {
  return (
    <Stack h="100vh" w="75%" justifyContent="center">
      <Text fontSize="5xl">About Me</Text>
      <Text fontSize="2xl">
        Hi there, if you haven't figure it out already, I'm Jeffrey. I'm an
        aspiring full-stack developer who is interested in learning and building
        impactful products.
      </Text>
      <Text fontSize="2xl">
        I like <Emoji label={"Bacon"} symbol={"🥓"} />,{" "}
        <Emoji label={"Tacos"} symbol={"🌮"} />, and{" "}
        <Emoji label={"Video Games"} symbol={"🎮"} />
      </Text>
      <Text fontSize="2xl"></Text>
    </Stack>
  );
};

export default About;
