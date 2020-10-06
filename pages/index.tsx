import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react"

import Button from "../src/components/Button"

const Home = () => {
  const { loginWithRedirect } = useAuth0()

  const handleLoginButtonClick = () => {
    loginWithRedirect()
  }

  return (
    <>
      <LoginContainer>
        <Button handleClick={handleLoginButtonClick}>
          Click to Auth0 Login
        </Button>
      </LoginContainer>
    </>
  )
}

export default Home

const LoginContainer = styled.div`
  margin: 120px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`
