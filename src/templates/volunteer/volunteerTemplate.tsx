import { Layout } from "../../components/Layout"
import * as React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Button,
  Heading,
  Link,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons"

type VolunteerProps = {
  data: {
    volunteer: {
      title: string
      why: {
        main: string
        bullets: string[]
      }[]
      how_i_can_thank_you: string[]
    }
  }
}

export const query = graphql`
  query ($slug: String!) {
    volunteer: volunteersJson(fields: { slug: { eq: $slug } }) {
      title
      why {
        main
        bullets
      }
      how_i_can_thank_you
    }
  }
`

const Volunteer = ({
  data: {
    volunteer: { title, why, how_i_can_thank_you },
  },
}: VolunteerProps) => {
  return (
    <Layout heading={title} arrowSettings={{ text: "Всі волонтерські позиції", href: "/volunteers/" }}>
      <Heading size={"md"}>Чому?</Heading>
      <UnorderedList>
        {why.map(({ main, bullets }) => (
          <ListItem listStyleType={"none"}>
            <ListIcon as={ArrowForwardIcon} />
            {main}
            <UnorderedList py={2} px={4}>
              {bullets.map(bullet => (
                <ListItem>{bullet}</ListItem>
              ))}
            </UnorderedList>
          </ListItem>
        ))}
      </UnorderedList>
      <Heading size={"md"}>Як я можу віддячити?</Heading>
      <Text>{how_i_can_thank_you.join(" ")}</Text>
      <Heading size={"md"}>Куди писати?</Heading>
      <Text>
        Можна{" "}
        <Link href="https://www.linkedin.com/in/trkohler/" color={"teal.600"}>
          сюди (це лінкедін профіль)
        </Link>{" "}
        чи на пошту kohler.work.mail[at]gmail.com.
      </Text>
      <Text>
        В темі листа напишіть, що ви хочете стати волонтером для Індексу
        Української Культури. В самому листі напишіть кратко про себе і про вашу
        експертизу.
      </Text>
    </Layout>
  )
}

export const Head = () => {}

export default Volunteer
