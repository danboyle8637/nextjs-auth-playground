import styled from "styled-components"

import ViewIndentity from "../src/components/ViewIdentity"
import useUser from "../src/hooks/useUser"

const Dashboard: React.FC = () => {
  const user = useUser()

  return (
    <>
      <Name>{user.data.nickname}</Name>
      <Name>{user.loading ? "Loading..." : "Not Loading..."}</Name>
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

export default Dashboard

const Name = styled.h1`
  margin: 20px 0;
  color: #f8f8f8;
`
