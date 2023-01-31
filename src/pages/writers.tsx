import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  Wrap,
} from "@chakra-ui/react"
import { LinksBox } from "../components/LinksBox"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { graphql } from "gatsby"
import React from "react"

export const query = graphql`
  query listing {
    writers: allUkranianWritersCsv {
      edges {
        node {
          id
          first_name_and_last_name
          education
          birthplace_tag
          fields {
            slug
          }
        }
      }
    }
  }
`

const Listing = ({ data: { writers } }) => {
  return (
    <Wrap align={"left"} bg="gray.50">
      <Container minW={"100%"}>
        <Box m={[10, 28]}>
          <Heading size={["lg", "2xl"]}>Письменники</Heading>
        </Box>

        <Box>
          {writers.edges.map(edge => (
            <HStack
              mb={[4, 10]}
              mx={[10, 24]}
              boxShadow="md"
              bgColor={"white"}
              rounded="lg"
              justifyContent={"space-between"}
              p={8}
            >
              <Stack>
                <Heading size={["sm", "md"]} fontWeight={"medium"}>
                  <Link href={`/profile/${edge.node.fields.slug}`}>
                    {edge.node.first_name_and_last_name}
                  </Link>
                </Heading>
              </Stack>
            </HStack>
          ))}
        </Box>

        <LinksBox />
      </Container>
    </Wrap>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Письменники</title>

// Step 3: Export your component
export default Listing
