import { Link } from "react-router-dom"
import styled from "styled-components"

export const About = () => {
  return (
    <AboutContainer>
      <h1>Car <span>Shop.</span></h1>
      <p>Empresa especializada em anúncios de automóveis!</p>
      <Link to="/">
        Ver anúncios!
      </Link>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  height: 100vh;
  background-color: #ededed;
  text-align: center;

  h1 {
    letter-spacing: 2px;

    span {
      color: red;
    }
  }

  p {
    margin: .5rem 0;
  }

  a {
    width: 10%;
    height: 35px;
    background-color: #f34e4e;
    border: none;
    color: #FFF;  
    border-radius: .3rem;
    cursor: pointer;
    transition: all .3s linear;
    display: block;
    margin: 0 auto;
    line-height: 35px;
  }

  a:hover {
    background-color: #ff1a1a;
  }
`