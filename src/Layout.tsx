import styled from "styled-components"

const Layout: React.FC = ({ children }) => {
  return <AppContainer>{children}</AppContainer>
}

export default Layout

const AppContainer = styled.div`
  padding: 120px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
`
