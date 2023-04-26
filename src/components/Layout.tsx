import React from "react"
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Wrap,
  Text,
  Center,
} from "@chakra-ui/react"
import { LinksBox } from "./LinksBox"
import { ArrowBackIcon } from "@chakra-ui/icons"

export const Layout = ({
  heading,
  arrowSettings,
  linkBox = true,
  children,
}: {
  heading: string
  arrowSettings?: { text: string; href: string },
  linkBox?: boolean,
  children: any
}) => {
  return (
    <Wrap bg="gray.50" minH={"100vh"}>
      
      <Container minW={"100%"}>
      <Header />
        {arrowSettings && <BackArrow {...arrowSettings} />}
        <Box my={[10, 16]} mx={[10, 24]}>
          <Heading size={["lg", "2xl"]} as="h1">
            {heading}
          </Heading>
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
            {children}
          </Stack>
        </Box>
        {linkBox && <LinksBox />}
      </Container>
    </Wrap>
  )
}


const BackArrow = ({ href, text }) => (
  <Box mx={[4, 10]} mt={[4, 10]}>
          <Button
            leftIcon={<ArrowBackIcon />}
            color={"blackAlpha.400"}
            variant="link"
            fontSize={["2xs", "md"]}
          >
            <Link href={href}>{text}</Link>
          </Button>
        </Box>
)

const Header = () => {
  return (
    <Center>
      <Stack direction={'row'} p={5}>
      {/* <Heading size="xs">My App</Heading> */}
      <HeaderLink href={'/'} text={'Індекс'} />
      <HeaderLink href={'/volunteers'} text={'Допомогти'} />
      <HeaderLink href={'/about'} text={'Про проєкт'} />
      <HeaderLink href={'/map/'} text={'Мапа письменників'} />
      
      </Stack>
    </Center>
  )
}

const HeaderLink = ({href, text}) => (
  <Container fontSize={'sm'} 
  minW='200px'
  centerContent
  >
    <Link color={'gray.400'} href={href}>{text}</Link>
  </Container>
  
)

