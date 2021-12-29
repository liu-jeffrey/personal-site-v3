import { Flex, Text, Image, Box, HStack, Icon, Link } from "@chakra-ui/react";

/* Icons */
import { HiOutlineMail } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

/* Assets */
import portrait from "../static/dark_portrait.png";
import Pdf from "../static/Jeffrey-Liu-Resume.pdf";

const Home = () => {
  return (
    <Flex bg="black" w="100vw" h="100vh" justify="center" align="center">
      <Box>
        <Image src={portrait} />
      </Box>
      <Flex direction="column">
        <Text fontSize="6xl" color="white">
          Hi, I'm Jeffrey
        </Text>
        <HStack>
          <Link href="mailto:jeffrey.liu@uwaterloo.ca">
            <Icon
              color="white"
              as={HiOutlineMail}
              w={6}
              h={6}
              _hover={{
                color: "mint.700",
                transform: "translate(0, -2px)",
              }}
              transition={"0.3s"}
            />
          </Link>
          <Link href="https://github.com/liu-jeffrey/" target="_blank">
            <Icon
              color="white"
              as={FiGithub}
              w={6}
              h={6}
              _hover={{
                color: "mint.700",
                transform: "translate(0, -2px)",
              }}
              transition={"0.3s"}
            />
          </Link>
          <Link href={Pdf} target="_blank">
            <Icon
              color="white"
              as={CgFileDocument}
              w={6}
              h={6}
              _hover={{
                color: "mint.700",
                transform: "translate(0, -2px)",
              }}
              transition={"0.3s"}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/liu-jeffrey/" target="_blank">
            <Icon
              color="white"
              as={RiLinkedinLine}
              w={6}
              h={6}
              _hover={{
                color: "mint.700",
                transform: "translate(0, -2px)",
              }}
              transition={"0.3s"}
            />
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Home;
