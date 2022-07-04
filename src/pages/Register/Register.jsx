import styled from "styled-components"
import { useState, useEffect } from "react"

export const Register = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputConfirmEmail, setInputConfirmEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  return (
    <div>
      
      <Form>
        <FormTitle>Cadastrar usuário</FormTitle>
        <label>
          <input 
            type="text" 
            placeholder="Digite seu Nome"  
            required
            value={inputName}
            onChange={e => setInputName(e.target.value)}
          />
        </label>
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
            type="email" 
            placeholder="Digite seu E-mail novamente"  
            required
            value={inputConfirmEmail}
            onChange={e => setInputConfirmEmail(e.target.value)}
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
          <input 
            type="password" 
            placeholder="Digite sua Senha novamente"  
            required
            value={inputConfirmPassword}
            onChange={e => setInputConfirmPassword(e.target.value)}
          />
        </label>
        <label>
          <button>
            Cadastrar
          </button>
        </label>
      </Form>
    </div>
  )
}

const Form = styled.form`
  width: 60%;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 0px 10px 13px -7px #000000;

  label {
    margin-bottom: 1.5rem;
    width: 100%;

    input {
      width: 100%;
      height: 30px;
      border: none;
      border-bottom: 2px solid #860202;
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
  }
`

const FormTitle = styled.h2`
  margin: 1rem 0;
`