import { Box, Container, Heading, Stack, Wrap, Text } from "@chakra-ui/react"
import React from "react"
import { LinksBox } from "../components/LinksBox"
import { Layout } from "../components/Layout"

const AboutProjectPage = () => {
  return (
    <Layout heading="Про проєкт">
      <Box maxW="xl">
      <Text>
        Проєкт зроблено для збереження памʼяті про українських культурних діячів
        і сприяння розповсюдженню української культури.<br/><br/>
        Якщо у вас є інформація про людей, профілі яких ви побачили на сторінках
        цього сайта: автор буде вам дуже вдячний за неї. Ви можете надсилати її
        на поштову скриньку: kohler.work.mail[at]gmail.com<br/><br/>
     Живіть, творіть і любіть. Слава Україні.</Text>
      </Box>
      
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Про проєкт</title>
    <meta
      name="description"
      content="Індекс української культури: опис проєкту і цілей."
    />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Про проєкт" />
    <meta
      property="og:description"
      content="Індекс української культури: опис проєкту і цілей."
    />
    <meta property="og:locale" content="uk_UA" />
  </>
)

export default AboutProjectPage
