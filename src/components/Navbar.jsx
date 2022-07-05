import styled from "styled-components"
import { Link } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../hooks/useAuthentication.jsx";

export const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <Nav>
      <div>
        <Link to="/" className="logo">
          Car <span>Shop.</span>
        </Link>
      </div>
      <List>
        {user && (
          <Link to="/">
            Home
          </Link>
        )}
        {!user && (
          <>
            <Link to="/login">
              Entrar
            </Link>
            <Link to="/register">
              Cadastrar
            </Link>
          </>
        )}
        {user && (
          <Link to="/posts/create">
            Anunciar Carro
          </Link>
        )}
        {user && (
          <Link to="/dashboard">
            Gerenciar Anúncios
          </Link>
        )}
        <Link to="/about">
          Sobre
        </Link>
        {user && (
          <button 
            className="btnLogout"
            onClick={logout}
          >
          Sair
        </button>
        )}
      </List>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #000;
  padding: 1.5rem;
  flex-wrap: wrap;

  div:hover > .logo {
    color: red;
    transform: translate(10px);
  }

  div:hover > a > span {
    color: #FFF;
  }

  .logo {
    color: #FFF;
    transition: all .3s linear;

    span {
      font-weight: 600;
      color: red;
    }
  }
`

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  a{
    font-size: .9rem;
    color: #FFF;
    margin-right: 1rem;
    transition: all .3s linear;
    padding: .2rem .4rem;
    border-radius: .325rem;

    &:hover{
      color: red;
      background-color: #d5d5d5;
    }
  }
`