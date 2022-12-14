import React, { useState, useContext } from "react";
//useState - Retorna um valor e uma função para atualizar o valor.
//useContext - Aceita um objeto de contexto (o valor retornado de React.createContext) e retorna o valor atual do contexto.

import { AuthContext } from "../../context/auth";

import "./styles.css";

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("submit", { email, password });
    login(email, password); // integração com o contexto / api
  }
  return (
    <div id="login">
      <h1 className="title">Chatbot UNICAP</h1>
      <p>{String(authenticated)}</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;