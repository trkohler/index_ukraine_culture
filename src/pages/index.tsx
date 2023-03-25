import {
  Box,
  Heading,
  Link,
} from "@chakra-ui/react"
import React from "react"
import { Layout } from "../components/Layout"

const MainPage = () => {
  return (
    <Layout heading={"Індекс української культури"}>
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
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Індекс української культури</title>
    <meta
      name="description"
      content="Цікавишся українськими митцями? Починай тут."
    />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Індекс української культури" />
    <meta
      property="og:description"
      content="Цікавишся українськими митцями? Починай тут."
    />
    <meta property="og:locale" content="uk_UA" />
  </>
)

export default MainPage
