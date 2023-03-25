import React from "react"
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Wrap,
} from "@chakra-ui/react"
import { LinksBox } from "./LinksBox"
import { ArrowBackIcon } from "@chakra-ui/icons"

export const Layout = ({
  heading,
  arrowSettings,
  children,
}: {
  heading: string
  arrowSettings?: { text: string; href: string }
  children: any
}) => {
  return (
    <Wrap bg="gray.50" minH={"100vh"}>
      <Container minW={"100%"}>
        {arrowSettings && <Box mx={[4, 10]} mt={[4, 10]}>
          <Button
            leftIcon={<ArrowBackIcon />}
            color={"blackAlpha.400"}
            variant="link"
            fontSize={["2xs", "md"]}
          >
            <Link href={arrowSettings.href}>{arrowSettings.text}</Link>
          </Button>
        </Box>}
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
        <LinksBox />
      </Container>
    </Wrap>
  )
}
