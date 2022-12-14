import React, { useState, useEffect, createContext } from "react";
//useState - Retorna um valor e uma função para atualizar o valor.
//useEffect - Aceita uma função que contém um código imperativo, possivelmente efetivo.
//createContext - cria um objeto context

import { useNavigate } from "react-router-dom";
//useNavigate - retorna uma função que permite navegar programaticamente.

export const AuthContext = createContext ();
//autenticação

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if(recoveredUser){
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = (email, password) => {    
    console.log("login auth", { email, password });

    const loggedUser = {
      id: "123",
      email,
    }

    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (password === "secret"){
      setUser(loggedUser);
      navigate("/");
    }
  };

  const logout = () => {
    console.log("logout");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
     value={{auhenticated: !!user, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

//criação de contexto = memória central que vai deixar disponível para gravar certas informações
//informações que a conotação delas precisa ser global