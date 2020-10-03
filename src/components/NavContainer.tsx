import styled from "styled-components"
import { useRecoilValue } from "recoil"

import NavMenuItem from "./NavMenuItem"
import { currentProgram, activeWorkout, loggedInUser } from "../atoms/atom"

const NavContainer: React.FC = () => {
  const programId = useRecoilValue(currentProgram)
  const workoutId = useRecoilValue(activeWorkout)
  const userId = useRecoilValue(loggedInUser)

  const navArray = [
    { id: 1, label: "Login", slug: "/api/login" },
    { id: 2, label: "Dashboard", slug: "/dashboard" },
    { id: 3, label: "Program", slug: `/program/${programId}` },
    {
      id: 4,
      label: "Workout",
      slug: `/workout/${workoutId}?programId=${programId}`,
    },
    { id: 5, label: "Account", slug: `/account/${userId}` },
    { id: 6, label: "Logout", slug: "/api/logout" },
  ]

  const navItems = navArray.map((item) => {
    const id = item.id
    const label = item.label
    const slug = item.slug

    return <NavMenuItem key={id} label={label} slug={slug} />
  })

  return <NavDrawer>{navItems}</NavDrawer>
}

export default NavContainer

const NavDrawer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  background: var(--color-darkBodyText);
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 2px 12px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`
