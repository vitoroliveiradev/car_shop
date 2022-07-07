import styled, {keyframes} from "styled-components";
import { zoomIn } from "react-animations";
import { Link } from "react-router-dom"

export const CardPost = ({ post }) => {
  return (
    <Card>
      <Link to={`/postdetail/${post.id}`}>
        <img src={post.image} alt="" />
        <h3>{post.name}</h3>
        <span>{post.brand}</span>
        <div className="specs">
          <p>R$ {post.value}</p>
          <p>{post.year}</p>        
        </div>
        {post.createdBy && (
          <Author>Anunciado por: <span>{post.createdBy}</span></Author>
        )}
      </Link>
    </Card>
  )
}

const animateImg = keyframes`${zoomIn}`

const Card = styled.div`
  text-align: center;
  width: 250px;
  height: auto;
  box-shadow: 0px 10px 13px -17px #000000;
  border: 2px solid #000;
  border-radius: .3rem;
  cursor: pointer;
  transition: transform .2s linear;

  &:hover > img {
    animation: 1s ${animateImg};
  }

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    color: red; 
  }
  
  span {
    font-size: .7rem;
  }

  
  img {
    width: 300px;
    height: 200px;
    max-width: 100%;
  }

  .specs {
    display: flex;
    justify-content: space-between;
    padding: .4rem;
    margin-top: .5rem;
  }
`

const Author = styled.p`
  text-align: left;
  font-style: italic;
  font-size: .7rem;
  margin-left: .2rem;

  span {
    color: red;
  }
`