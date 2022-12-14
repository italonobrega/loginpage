import React, { useContext } from "react";
//useContext - Aceita um objeto de contexto (o valor retornado de React.createContext) e retorna o valor atual do contexto.

import {
 BrowserRouter as Router,
 Route,
 Routes,
 Navigate,
} from "react-router-dom";
//router

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import { AuthProvider, AuthContext } from "./context/auth";
//authProvider = prover o authContext
const AppRoutes = () => {
  const Private = ({ children }) =>{
    const{ authenticated, loading } = useContext(AuthContext);

    if(loading){
      return <div className="loading">Carregando...</div>;
    }

    if(!authenticated){
      return <Navigate to="/login" />;
    }

    return children;
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element=
          {<LoginPage/>} />
          <Route 
            exact
            path="/" 
            element={
              <Private>
                <HomePage/>
              </Private>
              //private - rota de coveniencia, caso não eseja autenticado, va para a pagina de login,nao garante segurança 100%. só garante segurança o back exigindo o token
            } 
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes;