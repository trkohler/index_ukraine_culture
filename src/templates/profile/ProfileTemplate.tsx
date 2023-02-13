import {
  Box,
  Container,
  Heading,
  HStack,
  VStack,
  Wrap,
  Image,
  Stack,
} from "@chakra-ui/react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { ArtGallery } from "../../components/ArtGallery"
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
      example_art?: string
      gender: "M" | "F"
    }
  }
}

// glob expr: "*fedir-solncev*"

export const query = graphql`
  query createProfile($id: String!, $glob: String!) {
    profile: creatorsCsv(id: { eq: $id }) {
      first_name_and_last_name
      communities_contributed
      education
      citations
      birthplace
      most_famous_pieces
      sources_of_data
      travels
      gender
      example_art
    }

    art: allFile(filter: { name: { glob: $glob } }) {
      nodes {
        id
        base
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, formats: WEBP)
        }
      }
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

const genderMeta = {
  "by famous ukrainian creator": {
    M: "відомого українського митця",
    F: "відомої української митчині",
  },
}

// Step 2: Define your component
const Profile = (props: ProfileProps) => {
  
  const {
    data: { profile, art },
  } = props
  
  const titles = genderTitles[profile.gender]
  return (
    <Wrap bg="gray.50" minH={"100vh"}>
      <Container minW={"100%"}>
        <Box m={[10, 24]}>
          <Heading size={["lg", "2xl"]} as="h1">
            Профіль: {profile.first_name_and_last_name}
          </Heading>
        </Box>
        <Box>
          <Stack
            direction={["column", "row"]}
            mb={10}
            mx={[6, 24]}
            spacing={[10, 28]}
          >
            <VStack
              align={"stretch"}
              p={6}
              boxShadow="md"
              bgColor={"white"}
              rounded="lg"
            >
              {profile.birthplace && (
                <ProfileBox
                  heading={titles.born}
                  data={profile.birthplace}
                ></ProfileBox>
              )}
              {profile.education && (
                <ProfileBox
                  heading={titles.studied}
                  data={profile.education}
                ></ProfileBox>
              )}
              {profile.citations && (
                <ProfileBox
                  heading="Відомі цитати:"
                  data={profile.citations}
                ></ProfileBox>
              )}
              {profile.communities_contributed && (
                <ProfileBox
                  heading={titles.communities_contributed}
                  data={profile.communities_contributed}
                ></ProfileBox>
              )}
              {profile.most_famous_pieces && (
                <ProfileBox
                  heading="Найвідоміші твори:"
                  data={profile.most_famous_pieces}
                ></ProfileBox>
              )}
              {profile.travels && (
                <ProfileBox
                  heading={titles.traveled}
                  data={profile.travels}
                ></ProfileBox>
              )}
              {profile.sources_of_data && (
                <ProfileBox
                  heading="Джерела, які використовувалися для збору цієї інформації:"
                  data={<Link to={profile.sources_of_data}>джерело</Link>}
                ></ProfileBox>
              )}
            </VStack>
            {art.nodes.length && (
              <ArtGallery art={art} author={profile.first_name_and_last_name} />
            )}
          </Stack>

          <LinksBox />
        </Box>
      </Container>
    </Wrap>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = ({ data: { profile } }) => (
  <>
    <title>Профіль: {profile.first_name_and_last_name}</title>
    <meta
      name="description"
      content={`${
        profile.first_name_and_last_name
      }: життя, творчість, здобутки, і праця ${
        genderMeta["by famous ukrainian creator"][profile.gender]
      }`}
    />
    <meta name="robots" content="index, follow" />
    <meta
      property="og:title"
      content={`Профіль: ${profile.first_name_and_last_name}`}
    />
    <meta
      property="og:description"
      content={`${
        profile.first_name_and_last_name
      }: життя, творчість, здобутки, і праця ${
        genderMeta["by famous ukrainian creator"][profile.gender]
      }`}
    />
    <meta property="og:locale" content="uk_UA" />
  </>
)

// Step 3: Export your component
export default Profile
