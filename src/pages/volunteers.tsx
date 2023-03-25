import { Box, Heading, HStack, Link, Stack } from "@chakra-ui/react"
import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"

type VolunteersProps = {
  data: {
    allVolunteersJson: {
      nodes: [
        {
          title: string;
          fields: {
            slug: string;
          }
        }
      ]
    }
  }
}

export const query = graphql`
  query {
    allVolunteersJson(sort: { title: DESC }) {
      nodes {
        title
        fields {
          slug
        }
      }
    }
  }
`

const Volunteers = ({
  data: {
    allVolunteersJson: { nodes },
  },
}: VolunteersProps) => {

  return (
    <Layout heading={"Шукаю підтримувачів"}>
      <Box>
        {nodes.map(node => (
          <HStack bgColor={"white"} justifyContent={"space-between"} p={4}>
            <Stack>
              <Heading size={["sm"]} fontWeight={"medium"}>
                <Link href={`/volunteers/${node.fields.slug}`}>{node.title}</Link>
              </Heading>
            </Stack>
          </HStack>
        ))}
      </Box>
    </Layout>
  )
}

export const Head = () => <title>Шукаю підтримувачів</title>

export default Volunteers
