import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react"

import ViewIndentity from "../src/components/ViewIdentity"

interface Auth0User {
  email: string
  email_verified: boolean
  name: string
  nickname: string
  picture: string
  sub: string
  updated_at: string
}

// Keep going... https://auth0.com/docs/quickstart/spa/react

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    <>
      {isAuthenticated ? (
        <>
          <Headline>{user.email}</Headline>
          <ViewIndentity
            headline="Dashboard"
            image="/images/auth0-dashboard-image.jpg"
            altTag="Dashboard"
            titleTag="Dashboard View"
            label="Dashboard View"
          />
        </>
      ) : (
        <>
          <h1>Skeleton</h1>
          <ViewIndentity
            headline="Dashboard"
            image="/images/auth0-dashboard-image.jpg"
            altTag="Dashboard"
            titleTag="Dashboard View"
            label="Dashboard View"
          />
        </>
      )}
    </>
  )
}

export default Dashboard

const Headline = styled.h1`
  font-size: 28px;
  color: var(--color-tertiaryPurple);
`
