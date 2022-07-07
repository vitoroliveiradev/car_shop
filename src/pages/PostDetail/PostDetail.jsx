import { useParams } from "react-router-dom"
import { IndividualPost } from "../../components/IndividualPost";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import Loading from "../../assets/loading.svg";
import styled from "styled-components";

export const PostDetail = () => {
  const { id } = useParams();

  const { document: post, error, loading  } = useFetchDocument("posts", id);

  return (
    <Detail>
      {loading && <img src={Loading} className="loading" alt="Carregando conteúdos" />}
      {error && <p>{error}</p>}
      {post && (
        <IndividualPost post={post} />
      )}
    </Detail>
  )
}

const Detail = styled.div`

  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

`