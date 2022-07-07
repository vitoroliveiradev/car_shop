import styled from "styled-components";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthValue } from "../../context/AuthContext";
import { DashPost } from "../../components/DashPost";
import { Link } from "react-router-dom";
import Loading from "../../assets/loading.svg";

export const Dashboard = () => {
  const { user } = useAuthValue();

  const { documents: posts, loading, error } = useFetchDocuments("posts", null, user.uid);

  return (

    <Dash>
      {loading && <img src={Loading} className="loading" alt="Carregando conteúdos" />}
      {error && <p>{error}</p>}
      <Title>Seus anúncios</Title>  
      <div className="teste">
        {posts && posts.map((post, index) => (
          <DashPost 
            key={index}
            post={post}
          />
        ))}
      </div>
      
      {posts && posts.length === 0 && (
        <Noposts>
          <Title>
            Você não possui anúncios ainda!
          </Title>
          <Link to="/posts/create">
            <button>
              Criar Anúncio!
            </button>
          </Link>
        </Noposts>
        )}
    </Dash>
        
    
  )
}

const Title = styled.h1`
  text-align: center;
  margin: .6rem 0;
`

const Dash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 80%;
  flex-wrap: wrap;
  margin: 1rem auto;
  gap: .5rem;
  flex-direction: column;

  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .teste {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
`

const Noposts = styled.div`
  text-align: center;

  button {
    margin-top: 1rem;
    border: none;
    padding: .4rem .8rem;
    cursor: pointer;
    background-color: #f24646;
    cursor: pointer;
    color: #FFF;
    transition: background .3s linear;
    border-radius: 5px;
  }

  button:hover {
    background-color: red;
  }
`