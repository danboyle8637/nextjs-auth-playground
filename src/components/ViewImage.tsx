import styled from "styled-components"

interface ViewImageProps {
  src: string
  alt: string
  title: string
}

const ViewImage: React.FC<ViewImageProps> = ({ src, alt, title }) => {
  return (
    <>
      <Image src={src} alt={alt} title={title} />
    </>
  )
}

export default ViewImage

const Image = styled.img`
  border-radius: 100%;
  border: 16px solid #101010;
  width: 100%;
`
