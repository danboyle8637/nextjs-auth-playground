import { useRouter } from "next/router"

import ViewIndentity from "../../src/components/ViewIdentity"

const ProgramDashboard = () => {
  const { query } = useRouter()

  return (
    <>
      <ViewIndentity
        headline={`Program: ${query.programId}`}
        image="/images/auth0-program-image.jpg"
        altTag="Program View"
        titleTag="Program View"
        label={`${query.programId} Program`}
      />
    </>
  )
}

export default ProgramDashboard
