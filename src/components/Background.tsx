import { Box, Image } from "@chakra-ui/react";

/* Assets */
import portrait from "../static/dark_portrait.png";

const Background = () => {
  return (
    <Box
      w="50vw"
      h="100vh"
      bg="black"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: -1,
      }}
    >
      <Box w="50vw" justifyContent="end">
        <Image src={portrait} marginLeft="auto" />
      </Box>
    </Box>
  );
};

export default Background;
