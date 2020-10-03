import { useState } from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"

import TextInput from "./TextInput"
import { emailAddressFieldState } from "../atoms/atom"

const LoginForm = () => {
  const [touched, setTouched] = useState<boolean>(false)
  const [emailState, setEmailState] = useRecoilState<string>(
    emailAddressFieldState
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value = event.target.value
    setEmailState(value)
  }

  const handleInputActive = (event: React.FocusEvent<HTMLInputElement>) => {
    setTouched((prevValue) => !prevValue)
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    console.log(emailState)
  }

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <Headline>[Magic] Sign up or Login:</Headline>
      <InputContainer>
        <TextInput
          inputType="text"
          name="emailAddress"
          labelName="Email Address:"
          labelFor="emailAddress"
          placeholder="Sign up or login with your email..."
          value={emailState}
          touched={touched}
          onChange={handleInputChange}
          onFocus={handleInputActive}
          onBlur={handleInputActive}
        />
        <Button role="submit">Sign Up or Login</Button>
      </InputContainer>
    </FormContainer>
  )
}

export default LoginForm

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 50px;
  width: 500px;
`

const Headline = styled.h1`
  justify-self: center;
  font-family: sans-serif;
  font-size: 40px;
  color: var(--color-tertiaryPurple);
`

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
`

const Button = styled.button`
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6a00ff;
  border-radius: 12px;
  border: none;
  font-size: 18px;
  font-family: sans-serif;
  color: #f8f8f8;
  text-transform: uppercase;
  cursor: pointer;
`
