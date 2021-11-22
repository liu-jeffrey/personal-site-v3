import { Flex, Text, Image, Box } from "@chakra-ui/react"
import portrait from "../images/dark_portrait.png"

// const portrait = require('../images/dark_portrait.png')

const Home = () => {
    return (
        <Flex bg="black" w="100vw" h="100vh" justify="center" align="center">
            <Box>
                <Image src={portrait} />
            </Box>
            <Flex direction="column">
                <Text fontSize="6xl">
                    Hi, I'm Jeffrey
                </Text>
            </Flex>
        </Flex>
    )
}

export default Home