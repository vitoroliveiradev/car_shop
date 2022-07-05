import styled, { keyframes } from "styled-components"
import { useState, useEffect } from "react";
import { fadeIn, fadeInLeft } from 'react-animations';
import { useAuthentication } from "../../hooks/useAuthentication";
import { Link } from "react-router-dom"

export const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(null);
  const { loginUser, loading, error: authError } = useAuthentication();

  const handleSubmit = async e => {
    e.preventDefault();

    setError("");

    const user = {
      inputEmail,
      inputPassword
    }

    const res = await loginUser(user);

    console.log(res);
  }

  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError])

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Entrar</FormTitle>
        <label>
          <input 
            type="email" 
            placeholder="Digite seu E-mail"  
            required
            value={inputEmail}
            onChange={e => setInputEmail(e.target.value)}
          />
        </label>
        <label>
          <input 
            type="password" 
            placeholder="Digite sua Senha"  
            required
            value={inputPassword}
            onChange={e => setInputPassword(e.target.value)}
          />
        </label>
        <label>
          <button className="btn">
            Entrar
          </button>
        </label>
        <label>
          <Link to="/register">
            <span className="noregister">ainda não tem cadastro ?</span>
          </Link>
        </label>
        {error && <p className="error">{error}</p>}
      </Form>
    </div>
  )
}

const fadeAnimation = keyframes`${fadeIn}`;
const fadeLeftAnimation = keyframes`${fadeInLeft}`;

const Form = styled.form`
  animation: 1s ${fadeAnimation};
  width: 35%;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 0px 10px 13px -7px #000000;

  label {
    margin-bottom: 2rem;
    width: 100%;
    text-align: center;
    animation: .4s ${fadeLeftAnimation};

    input {
      width: 80%;
      height: 30px;
      border: none;
      border-bottom: 2px solid #bb0101;
      outline: none;
      padding-left: .1rem;
      &::placeholder {
        color: #523535;
        font-size: .7rem;
      }

      &:active > &::placeholder {
        color: #420202;
      }
    }

    button {
      width: 45%;
      height: 35px;
      background-color: #f34e4e;
      border: none;
      color: #FFF;  
      border-radius: .3rem;
      cursor: pointer;
      transition: all .3s linear;

      &:hover {
        background-color: #ff1a1a;
      }
    }
  }
`

const FormTitle = styled.h2`
  margin: 1rem 0;
`