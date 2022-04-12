import React from "react";
import { Link } from "react-router-dom";
import "./erro.css";

const Erro = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Página não encontrada</p>
      <Link to="/">Veja todos os filmes</Link>
    </div>
  );
};

export default Erro;
