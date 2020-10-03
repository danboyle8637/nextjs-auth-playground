import styled from "styled-components"

import Button from "./Button"

const Auth0Login = () => {
  return (
    <LoginContainer>
      <Headline>[Auth0] Login Button:</Headline>
      <Button slug="/api/login">Login</Button>
      <a href="/api/login">Login</a>
    </LoginContainer>
  )
}

export default Auth0Login

const LoginContainer = styled.form`
  margin: 120px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 50px;
  justify-items: center;
  width: 500px;
`

const Headline = styled.h1`
  justify-self: center;
  font-family: sans-serif;
  font-size: 40px;
  color: var(--color-tertiaryPurple);
`
