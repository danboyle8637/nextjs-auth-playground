import { useRouter } from "next/router"

import ViewIndentity from "../../src/components/ViewIdentity"

const UserAccount = () => {
  const { query } = useRouter()

  return (
    <>
      <ViewIndentity
        headline={`Account: ${query.userId}`}
        image="/images/auth0-profile-image.jpg"
        altTag="Account Profile View"
        titleTag="Account Profile View"
        label={`${query.userId} Account and Setup`}
      />
    </>
  )
}

export default UserAccount
