import { Box, Heading, Text, HStack, Link } from "@chakra-ui/react"
import React from "react"

export const LinksBox = () => (
  <Box m={[10, 28]}>
    <HStack justify={'center'}>
      <Text color={"blackAlpha.400"}>
      <Link href={"/"}>
        Iндекс української культури
      </Link>
      &nbsp; © 2023
      </Text>
      
      
    </HStack>
  </Box>
)
