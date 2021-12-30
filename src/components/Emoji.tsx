import { Box } from "@chakra-ui/react";

type EmojiProp = {
  label?: string;
  symbol: string;
};

const Emoji = (props: EmojiProp) => (
  <Box
    as="span"
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </Box>
);

export default Emoji;
