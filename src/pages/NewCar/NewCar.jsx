import styled, { keyframes } from "styled-components"
import { useState, useEffect } from "react";
import { fadeIn, fadeInLeft } from 'react-animations';
import { userInsertDocument } from "../../hooks/useInsertDocuments";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

export const NewCar = () => {
  const [carName, setCarName] = useState("");
  const [carYear, setCarYear] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carImage, setCarImage] = useState("");
  const [carValue, setCarValue] = useState("");
  const [carDescription, setCarDescription] = useState("");
  const [error, setError] = useState(null);
  const { insertDocument, response } = userInsertDocument("posts");
  const navigate = useNavigate();
  const { user } = useAuthValue();
  
  const handleSubmit = async e => {
    e.preventDefault();

    setError("");

    insertDocument({
      name: carName,
      year: carYear,
      brand: carBrand,
      image: carImage,
      value: carValue,
      desc: carDescription,
      createdBy: user.displayName,
      uid: user.uid,
    })

    navigate("/");
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Cadastrar Veículo</FormTitle>
        <label>
          <input 
            type="text" 
            placeholder="Digite o nome do carro:"  
            required
            value={carName}
            onChange={e => setCarName(e.target.value)}
          />
        </label>
        <label>
          <input 
            type="number" 
            placeholder="Digite o ano do carro:"  
            required
            value={carYear}
            onChange={e => setCarYear(e.target.value)}
          />
        </label>
        <label>
          <input 
            type="text" 
            placeholder="Digite a marca do carro:"  
            required
            value={carBrand}
            onChange={e => setCarBrand(e.target.value)}
          />
        </label>
        <label>
          <input 
            type="text" 
            placeholder="URL da imagem do carro:"  
            required
            value={carImage}
            onChange={e => setCarImage(e.target.value)}
          />
        </label>
        <label>
          <input 
            type="number" 
            placeholder="Digite o valor do carro:"  
            required
            value={carValue}
            onChange={e => setCarValue(e.target.value)}
          />
        </label>
        <label>
          <textarea  
            placeholder="Descrição do carro..."  
            required
            value={carDescription}
            onChange={e => setCarDescription(e.target.value)}
          ></textarea>
        </label>
        <label>
          <button className="btn">
            Cadastrar Veículo
          </button>
        </label>
        {response.error && <p className="error">{response.error}</p>}
        {response.loading && <p>Carregando...</p>}
      </Form>
    </div>
  )
}

const fadeAnimation = keyframes`${fadeIn}`;
const fadeLeftAnimation = keyframes`${fadeInLeft}`;

const Form = styled.form`
  animation: 1s ${fadeAnimation};
  width: 40%;
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
    text-align: center;
    animation: .4s ${fadeLeftAnimation};

    input, textarea {
      width: 100%;
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

    textarea {
      resize: none;
      min-height: 4rem;
      border: 2px solid #bb0101;
      padding: 4px;
    font-size: .7rem;
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