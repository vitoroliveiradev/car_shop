import { Link } from "react-router-dom"
import styled from "styled-components"

export const IndividualPost = ({ post }) => {
  return (
    <Post>
      <img src={post.image} alt={post.image} />
      <h3 className="carName">{post.name}</h3>
      <div className="descContainer">
        <div className="desc">
          <span>Ano: {post.year}</span>
          <span>{post.value}</span>
        </div>
        <div className="carDetails">
          <h3>Sobre este carro</h3>
          <p>{post.desc}</p>
        </div>
      </div>
      <Link to="/" className="backButton">
        Voltar
      </Link>
    </Post>
  )
}

const Post = styled.div`
  padding: .5rem;
  width: 80%;
  margin: .5rem auto;
  text-align: center;
  box-shadow: 0px 10px 13px -7px #000000;

  .carName {
    margin: 2rem 0;
  }

  img {
    width: 70%;
    height: 70vh;
    background-position: cover;
    background-repeat: no-repeat;
    border-radius: .5rem;
  }

  .descContainer {
    width: 70%;
    margin: 0 auto;
    border-radius: .5rem;
    padding: .2rem .4rem;
    border: 2px solid #CCC;
    padding: 1rem;
  }

  .desc {
    display: flex;
    justify-content: space-between;
  }

  .carDetails {
    margin-top: 1rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h3 {
      margin: 1rem 0;
    }

    p {
      margin-top: .5rem;
      text-align: left;
      width: 90%;
      font-size: .9rem;
      line-height: 1.2rem;
    }

  }
  .backButton {
    display: block;
    padding: .5rem 0;
    max-width: 10%;
    margin: 2rem auto;
    background-color: #797979;
    border-radius: 10px;
    transition: background .2s linear;
  }

  .backButton:hover {
    background-color: #000;
    color: #FFF;
  }

`