import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDeleteDocument } from "../hooks/useDeleteDocument";

export const DashPost = ({ post }) => {
  const { deleteDocument, response } = useDeleteDocument("posts");

  const delDocument = () => {
    const a = confirm("Deletar Carro ? ")

    if(a) {
      deleteDocument(post.id);
    }
  }

  return (
    <Content>
      <div className="top">
        <h3><span>Nome do Carro:</span> {post.name}</h3>
        <img src={post.image} alt={post.name} />
      </div>
      <div className="bottom">
        <Link to={`/postDetail/${post.id}`}>
          <button className="see">Ver carro</button>
        </Link>
        <Link to={`/posts/edit/${post.id}`}>
          <button className="edit">Editar</button>
        </Link>
        <button 
          className="red"
          onClick={delDocument}
        >Deletar</button>
      </div>
    </Content>
  )
}

const Content = styled.div`
  text-align: center;
  border: 2px solid black;
  border-radius: .5rem;
  width: 18.75rem;
  height: 19rem;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .top h3 {
    margin: .5rem 0;
  }

  img {
    border-radius: .4rem;
    max-width: 100%;
    margin: .5rem 0;
    max-height: 160px;
  }

  .bottom {
    display: flex;
    flex-wrap: wrap;
  }

  .bottom button {
    margin-right: .3rem;
    width: 5rem;
    border: none;
    padding: .2rem;
    border-radius: .3rem;
    cursor: pointer;
    transition: background .2s linear; 
  }
`