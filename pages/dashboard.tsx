import { NextPageContext } from "next"
import styled from "styled-components"

import ViewIndentity from "../src/components/ViewIdentity"
import { Auth0User } from "../src/requests/fetchUser"
import Auth0 from "../utils/auth0"

interface DashboardProps {
  user: Auth0User
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <>
      <Name>{user.nickname}</Name>
      <Name>{user.name}</Name>
      <ViewIndentity
        headline="Dashboard"
        image="/images/auth0-dashboard-image.jpg"
        altTag="Dashboard"
        titleTag="Dashboard View"
        label="Dashboard View"
      />
    </>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { req, res } = context

  if (req === undefined || res === undefined) {
    return {
      props: {
        user: null,
      },
    }
  }

  const session = await Auth0.getSession(req)

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/login",
    })
    res.end()
    return
  }

  return {
    props: {
      user: session.user,
    },
  }
}

export default Dashboard

const Name = styled.h1`
  margin: 20px 0;
  color: #f8f8f8;
`
