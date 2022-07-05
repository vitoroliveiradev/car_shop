import { Link } from "react-router-dom"
import styled, {keyframes} from "styled-components";
import { pulse } from "react-animations"

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>Está <span>página</span> não <span>existe!</span></h1>
      <Link to="/" className="btn">
        Voltar
      </Link>
    </NotFoundContainer>
  )
}

const animateButton = keyframes`${pulse}`;

const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 1rem;

  h1 span {
    color: #980000;
  }

  .btn {
    padding: .3rem 0;
    background-color: #f34e4e;
    border: none;
    color: #FFF;  
    border-radius: .3rem;
    cursor: pointer;
    transition: all .3s linear;
    display: block;
    width: 20%;
    margin: 0 auto;
    margin-top: 1rem;
    animation: 2s ${animateButton} infinite;

      &:hover {
        background-color: #ff1a1a;
      }
  }
`