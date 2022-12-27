import { Box, Heading, Text } from "@chakra-ui/react"
import React from "react"

export const ProfileBox = ({ heading, data }) => (
  <Box>
    <Heading as="h3" size="md">
      {heading}
    </Heading>
    <Text fontSize="lg">{data}</Text>
  </Box>
)
