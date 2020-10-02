import { useRouter } from "next/router"

import ViewIndentity from "../../src/components/ViewIdentity"

const WorkoutView = () => {
  const { query } = useRouter()

  return (
    <>
      <ViewIndentity
        headline={`Workout: ${query.workoutId}`}
        image="/images/auth0-workout-image.jpg"
        altTag="Workout View"
        titleTag="Workout View"
        label={`Workout belongs to programId: ${query.programId}`}
      />
    </>
  )
}

export default WorkoutView
