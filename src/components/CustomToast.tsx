import { HStack, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type CustomToastProps = {
  icon?: ReactNode;
  message: string;
};

const CustomToast = (props: CustomToastProps) => {
  return (
    <HStack
      spacing="5px"
      bg="mint.700"
      borderRadius="md"
      mb="3"
      p={3}
      justifyContent={"center"}
    >
      {props.icon}
      <Box color="white" fontWeight="500" as="h4" mb="2">
        {props.message}
      </Box>
    </HStack>
  );
};

export default CustomToast;
