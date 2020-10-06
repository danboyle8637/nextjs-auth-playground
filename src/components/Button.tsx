import styled from "styled-components"

interface ButtonProps {
  handleClick: () => void
}

const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
  return <AppButton onClick={handleClick}>{children}</AppButton>
}

export default Button

const AppButton = styled.button`
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
