import React, { useState, useContext } from "react";
//useState - Retorna um valor e uma função para atualizar o valor.
//useContext - Aceita um objeto de contexto (o valor retornado de React.createContext) e retorna o valor atual do contexto.

import { AuthContext } from "../../context/auth";

import "./styles.css";


const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [matricula, setmatricula] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("submit", { matricula, password });
    login(matricula, password); // integração com o contexto e api
  }
  return (
    <div id="login">
      <div id="login-area">
        <h1 className="title">Chatbot UNICAP</h1>
        <p>{String(authenticated)}</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="matricula">Matricula</label>
            <input 
              type="text" 
              name="matricula" 
              id="matricula" 
              value={matricula} 
              onChange={(e) => setmatricula(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Senha</label>
            <input
            type="password" 
            name="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <div className="actions">
            <button type="submit">Acessar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;