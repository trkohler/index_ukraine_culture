import { Heading, VStack } from "@chakra-ui/react"
import { graphql } from "gatsby"
import * as React from "react"
import { Link } from "../../components/Link"
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
    }
  }
`

// Step 2: Define your component
const Profile = ({ data: { profile } }: ProfileProps) => {
  return (
    <main>
      <VStack align={"stretch"} p={[6, 28]}>
        <Heading as="h1">Профіль: {profile.first_name_and_last_name}</Heading>
        <ProfileBox heading="Народився:" data={profile.birthplace}></ProfileBox>
        <ProfileBox heading="Вчився:" data={profile.education}></ProfileBox>
        <ProfileBox
          heading="Відомі цитати:"
          data={profile.citations}
        ></ProfileBox>
        <ProfileBox
          heading="Підтримував такі спільноти:"
          data={profile.communities_contributed}
        ></ProfileBox>
        <ProfileBox
          heading="Найвідоміші твори:"
          data={profile.most_famous_pieces}
        ></ProfileBox>
        <ProfileBox heading="Подорожі:" data={profile.travels}></ProfileBox>
        <ProfileBox
          heading="Джерела, які використовувалися:"
          data={<Link to={profile.sources_of_data}>назва джерела</Link>}
        ></ProfileBox>
      </VStack>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Profile
