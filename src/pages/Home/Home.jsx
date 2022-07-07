import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { CardPost } from "../../components/CardPost";
import styled, {keyframes} from "styled-components";
import { fadeIn } from "react-animations";
import Loading from "../../assets/loading.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  const { documents: posts, loading, error } = useFetchDocuments("posts");
  
  return (
    <>
      {posts && posts.length === 0 && (
        <Title>
          Ainda não temos anúncios!
          <Link to="/posts/create">
            Criar Anúncio!
          </Link>
        </Title>
      )}
      {posts && posts.length > 0 && (
        <Title>Carros disponíveis</Title>
      )}
      <CardContainer>
        {posts && posts.length > 0 && posts.map((post, index) => (
          <CardPost post={post} key={index} />
        ))}
      </CardContainer>
      {loading && <img src={Loading} alt="Carregando conteúdos" />}
      {error && <p>{error}</p>}
    </>
  )

  
}

const animate = keyframes`${fadeIn}`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  gap: 1rem;
  flex-wrap: wrap;
  animation: 1s ${animate};
`

const Title = styled.h1`
  text-align: center;
  margin: 1rem 0;
`