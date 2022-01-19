import {
  Flex,
  Text,
  Image,
  Box,
  HStack,
  Icon,
  Link,
  useToast,
} from "@chakra-ui/react";

/* Icons */
import { HiOutlineMail } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

/* Assets */
import Pdf from "../static/Jeffrey-Liu-Resume.pdf";

/* Components */
import CustomToast from "../components/CustomToast";
import Emoji from "../components/Emoji";

const Home = () => {
  const wipToast = useToast();
  const toastId = "wip-toast";

  const wipMessage = "This site is still a WIP, gimme 5!";

  window.onwheel = () => {
    console.log("SCROLLED");
    if (!wipToast.isActive(toastId)) {
      wipToast({
        id: toastId,
        render: () =>
          CustomToast({
            icon: Emoji({ label: "rocket", symbol: "🚀" }),
            message: wipMessage,
          }),
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      bg="black"
      w="50vw"
      h="100vh"
      alignItems="flexStart"
      justify="center"
      direction="column"
    >
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
  );
};

export default Home;
