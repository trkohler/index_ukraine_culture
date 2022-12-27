// Step 1: Import React
import { graphql } from "gatsby"
import * as React from "react"

export const query = graphql`
  query createProfile($id: String!) {
    ukranianWritersCsv(id: { eq: $id }) {
      first_name_and_last_name
    }
  }
`

// Step 2: Define your component
const Profile = data => {
  console.log(data)
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <code>{JSON.stringify(data, null, 4)}</code>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Profile
