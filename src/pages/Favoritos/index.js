import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./favoritos.css";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const minhaLista = JSON.parse(localStorage.getItem("favoritos")) || [];
    console.log(minhaLista);
    setFavoritos(minhaLista);
  }, []);

  const handleDelete = (id) => {
    const filtroFilmes = favoritos.filter((filme) => {
      return filme.id !== id;
    });

    setFavoritos(filtroFilmes);
    localStorage.setItem("favoritos", JSON.stringify(filtroFilmes));
    toast.success("Filme excluido com sucesso!");
  };

  if (favoritos.length === 0)
    return <div>Você não possui filmes favoritos =(</div>;
  if (favoritos) {
    return (
      <section className="favoritos-content">
        <h2>Meus Favoritos:</h2>
        <ul className="favoritos-lista">
          {favoritos.map((filme) => {
            return (
              <li key={filme.id}>
                <span>{filme.nome}</span>
                <div>
                  <Link className="botao" to={`/filme/${filme.id}`}>
                    Detalhes
                  </Link>
                  <button
                    className="botao"
                    onClick={() => handleDelete(filme.id)}
                  >
                    Excluir
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
};

export default Favoritos;
