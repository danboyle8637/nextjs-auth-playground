import { useEffect } from "react"
import { NextPageContext } from "next"

import ViewIndentity from "../src/components/ViewIdentity"
import Auth0 from "../utils/auth0"

interface DashboardProps {
  user: any
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <>
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
    return
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
