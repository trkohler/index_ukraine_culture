import { Box, Heading, Text, HStack, Link } from "@chakra-ui/react"
import React from "react"

export const LinksBox = () => (
    <Box m={"28"}>
    <HStack justify={"space-between"}>
      <Link color={"blackAlpha.400"} href={"/about"}>Про проєкт</Link>
      <Link color={"blackAlpha.400"} href={"/"}>Головна</Link>
    </HStack>
  </Box>
)