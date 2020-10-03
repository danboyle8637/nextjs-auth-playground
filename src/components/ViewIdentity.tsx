import { useEffect } from "react"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import styled from "styled-components"

import ViewImage from "./ViewImage"
import { currentUserState } from "../atoms/atom"
import { fetchUser } from "../requests/fetchUser"

interface ViewIdentityProps {
  headline: string
  image: string
  altTag: string
  titleTag: string
  label: string
}

const ViewIdentity: React.FC<ViewIdentityProps> = ({
  headline,
  image,
  altTag,
  titleTag,
  label,
}) => {
  const [user, setUserState] = useRecoilState(currentUserState)
  const { pathname } = useRouter()

  useEffect(() => {
    const accountPathname = pathname.split("/")[1]
    if (accountPathname === "account") {
      fetchUser()
        .then((user) => {
          setUserState(user)
        })
        .catch((error) => console.log(error))
    }
  }, [])

  return (
    <ViewContainer>
      <Headline>{headline}</Headline>
      <ViewImage src={image} alt={altTag} title={titleTag} />
      <Label>{label}</Label>
    </ViewContainer>
  )
}

export default ViewIdentity

const ViewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 400px;
`

const Headline = styled.h1`
  justify-self: center;
  font-family: sans-serif;
  font-size: 40px;
  color: var(--color-tertiaryPurple);
`

const Label = styled.h4`
  font-family: sans-serif;
  font-size: 26px;
  color: var(--color-igniteWorkoutHeadline);
`
