import Link from "next/link"
import styled from "styled-components"

interface ButtonProps {
  slug: string
}

const aTagStyles = {
  textDecoration: "none",
}

const Button: React.FC<ButtonProps> = ({ children, slug }) => {
  return (
    <Link href={slug}>
      <a style={aTagStyles}>
        <AppButton>{children}</AppButton>
      </a>
    </Link>
  )
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
