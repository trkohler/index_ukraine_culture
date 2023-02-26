import { Box, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ProfileList } from "./ProfileList"

export const ProfileBox = ({ heading, data }) => {
  const dataIsArray = Array.isArray(data)
  return (
  <Box>
    <Heading as="h3" size={["sm","md"]} py={2}>
      {heading}
    </Heading>
    {
      dataIsArray ? <ProfileList list={data} /> : <Text fontSize={["sm", "md"]}>{data}</Text>
    }
  </Box>
)}
