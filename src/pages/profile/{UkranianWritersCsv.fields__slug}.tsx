import { Box, Container, Heading, HStack, VStack, Wrap } from "@chakra-ui/react"
import { graphql } from "gatsby"
import * as React from "react"
import { Link } from "../../components/Link"
import { LinksBox } from "../../components/LinksBox"
import { ProfileBox } from "../../components/ProfileBox"

type ProfileProps = {
  data: {
    profile: {
      first_name_and_last_name: string
      communities_contributed: string
      education: string
      citations: string
      birthplace: string
      most_famous_pieces: string
      sources_of_data: string
      travels: string
      gender: "M" | "F"
    }
  }
}

export const query = graphql`
  query createProfile($id: String!) {
    profile: ukranianWritersCsv(id: { eq: $id }) {
      first_name_and_last_name
      communities_contributed
      education
      citations
      birthplace
      most_famous_pieces
      sources_of_data
      travels
      gender
    }
  }
`

const genderTitles = {
  F: {
    born: "Народилася:",
    studied: "Навчалася:",
    communities_contributed: "Підтримувала такі спільноти:",
    traveled: "Подорожувала:",
  },
  M: {
    born: "Народився:",
    studied: "Навчався:",
    communities_contributed: "Підтримував такі спільноти:",
    traveled: "Подорожував:",
  },
}

// Step 2: Define your component
const Profile = ({ data: { profile } }: ProfileProps) => {
  const titles = genderTitles[profile.gender]
  return (
    <Wrap bg="gray.50" minH={'100vh'}>
      <Container minW={"100%"}>
      <Box m={[10, 24]}>
          <Heading size={["lg", "2xl"]}>Профіль: {profile.first_name_and_last_name}</Heading>
        </Box>
        <Box>
          <VStack
            mb={10}
            mx={[6, 24]}
            align={"stretch"}
            p={6}
            boxShadow="md"
            bgColor={"white"}
            rounded="lg"
          >
            <ProfileBox
              heading={titles.born}
              data={profile.birthplace}
            ></ProfileBox>
            {profile.education && <ProfileBox
              heading={titles.studied}
              data={profile.education}
            ></ProfileBox>}
            {profile.citations && <ProfileBox
              heading="Відомі цитати:"
              data={profile.citations}
            ></ProfileBox>}
            {profile.communities_contributed && (
              <ProfileBox
                heading={titles.communities_contributed}
                data={profile.communities_contributed}
              ></ProfileBox>
            )}
            <ProfileBox
              heading="Найвідоміші твори:"
              data={profile.most_famous_pieces}
            ></ProfileBox>
            {profile.travels && <ProfileBox
              heading={titles.traveled}
              data={profile.travels}
            ></ProfileBox>}
            <ProfileBox
              heading="Джерела, які використовувалися для збору цієї інформації:"
              data={<Link to={profile.sources_of_data}>джерело</Link>}
            ></ProfileBox>
          </VStack>
          <LinksBox />
        </Box>
      </Container>
    </Wrap>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Profile
