import {
  Box,
  Container,
  Heading,
  Stack,
  Wrap,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react"
import React from "react"
import { LinksBox } from "../components/LinksBox"

const MainPage = () => {
  return (
    <Wrap bg="gray.50" minH={"100vh"}>
      <Container minW={"100%"}>
        <Box m={[10, 28]}>
          <Heading size={["lg", "2xl"]} as="h1">Індекс української культури</Heading>
        </Box>
        <Box>
          <Stack
            mb={10}
            mx={[10, 24]}
            boxShadow="md"
            bgColor={"white"}
            rounded="lg"
            p={8}
          >
            <Box>
              <Heading size={"md"} as={"h3"}>
                <Link href={"/listing/writers"}>Письменники</Link>
              </Heading>
            </Box>
            <Box>
              <Heading size={"md"} as={"h3"}>
              <Link href={"/listing/artists"}>Художники</Link>
              </Heading>
            </Box>
            <Box>
              <Heading size={"md"} as={"h3"} color={"blackAlpha.300"}>
                Музиканти (в роботі)
              </Heading>
            </Box>
            <Box>
              <Heading size={"md"} as={"h3"} color={"blackAlpha.300"}>
                Мультидисциплинарні митці (в роботі)
              </Heading>
            </Box>
          </Stack>
        </Box>
        <LinksBox />
      </Container>
    </Wrap>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <>
<title>Індекс української культури</title>
<meta
  name="description"
  content="Цікавишся українськими митцями? Починай тут."
/>
<meta name="robots" content="index, follow" />
<meta
  property="og:title"
  content="Індекс української культури"
/>
<meta
  property="og:description"
  content="Цікавишся українськими митцями? Починай тут."
/>
<meta property="og:locale" content="uk_UA" />
</>

export default MainPage
