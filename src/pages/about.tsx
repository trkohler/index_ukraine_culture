import { Box, Container, Heading, Stack, Wrap, Text } from "@chakra-ui/react"
import React from "react"
import { LinksBox } from "../components/LinksBox"

const AboutProjectPage = () => {
  return (
    <Wrap bg="gray.50" minH={"100vh"}>
      <Container minW={"100%"}>
        <Box my={[10, 16]} mx={[10, 24]}>
          <Heading size={["lg", "2xl"]}>Про проєкт</Heading>
        </Box>
        <Box>
          <Stack
            mb={10}
            mx={[6, 24]}
            boxShadow="md"
            bgColor={"white"}
            rounded="lg"
            p={8}
          >
            <Text>Дякую моєму вчителю української мови Олексію.</Text>
            <Text>
              Проєкт зроблено для збереження памʼяті про українських культурних
              діячів і сприяння розповсюдженню української культури. Проєкт
              зроблено однією людиною на особисті гроші.
            </Text>
            <Text>
              Якщо у вас є інформація про людей, профілі яких ви побачили на
              сторінках цього сайта: автор буде вам дуже вдячний за неї. Ви
              можете надсилати її на поштову скриньку: kohler.work.mail[at]gmail.com
            </Text>
            <Text>Живіть, творіть і любіть. Слава Україні.</Text>
          </Stack>
        </Box>

        <LinksBox />
      </Container>
    </Wrap>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <>
<title>Про проєкт</title>
<meta
  name="description"
  content="Індекс української культури: опис проєкту і цілей."
/>
<meta name="robots" content="index, follow" />
<meta
  property="og:title"
  content="Про проєкт"
/>
<meta
  property="og:description"
  content="Індекс української культури: опис проєкту і цілей."
/>
<meta property="og:locale" content="uk_UA" />
</>

export default AboutProjectPage
