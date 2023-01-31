import { Box, Heading, Text } from "@chakra-ui/react"
import React from "react"

export const ProfileBox = ({ heading, data }) => (
  <Box>
    <Heading as="h3" size={["sm","md"]}>
      {heading}
    </Heading>
    <Text fontSize={["sm", "lg"]}>{data}</Text>
  </Box>
)
