import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { CardPost } from "../../components/CardPost";
import styled from "styled-components";

export const Home = () => {
  const { documents: posts, loading, error } = useFetchDocuments("posts");

  console.log(posts)
  return (
    <CardContainer>
      {posts && posts.map((post, index) => (
        <CardPost post={post} key={index} />
      ))}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  gap: 1rem;
  flex-wrap: wrap;
`