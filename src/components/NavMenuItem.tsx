import Link from "next/link"
import styled from "styled-components"

interface NavMenuItemProps {
  label: string
  slug: string
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ label, slug }) => {
  return (
    <NavLabelContainer>
      <NavLabel>
        <Link href={slug} passHref={true}>
          <Atag>{label}</Atag>
        </Link>
      </NavLabel>
    </NavLabelContainer>
  )
}

export default NavMenuItem

const NavLabelContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(210, 213, 255, 0.2);
  width: 100%;
  height: 50px;
`

const NavLabel = styled.li`
  margin: 0;
  padding: 0;
`

const Atag = styled.a`
  font-size: 18px;
  font-weight: 600;
  font-family: sans-serif;
  color: var(--color-primaryBodyText);
  text-decoration: none;
`
