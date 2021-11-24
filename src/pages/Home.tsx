import { Flex, Text, Image, Box, HStack, Icon, Link } from "@chakra-ui/react";

/* Icons */
import { HiOutlineMail } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

/* Assets */
import portrait from "../static/dark_portrait.png";
import Pdf from "../static/21-10-28.pdf";

const Home = () => {
  return (
    <Flex bg="black" w="100vw" h="100vh" justify="center" align="center">
      <Box>
        <Image src={portrait} />
      </Box>
      <Flex direction="column">
        <Text fontSize="6xl">Hi, I'm Jeffrey</Text>
        <HStack>
          <Link href="mailto:jeffrey.liu@uwaterloo.ca">
            <Icon as={HiOutlineMail} w={6} h={6} />
          </Link>
          <Link href="https://github.com/liu-jeffrey/" target="_blank">
            <Icon as={FiGithub} w={6} h={6} />
          </Link>
          <Link href={Pdf} target="_blank">
            <Icon as={CgFileDocument} w={6} h={6} />
          </Link>
          <Link href="https://www.linkedin.com/in/liu-jeffrey/" target="_blank">
            <Icon as={RiLinkedinLine} w={6} h={6} />
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Home;
