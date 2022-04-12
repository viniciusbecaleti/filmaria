import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../services/api";
import "./home.css";

const Home = () => {
  const [filmes, setFilmes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilmes = async () => {
      const response = await API.get("r-api/?api=filmes/");
      setFilmes(response.data);
      setLoading(false);
    };

    loadFilmes();
  }, []);

  if (loading) return <div className="loading"></div>;
  if (filmes && !loading) {
    return (
      <section className="filmes">
        {filmes.map((filme) => {
          return (
            <article className="filmes-item" key={filme.id}>
              <h2>{filme.nome}</h2>
              <img src={filme.foto} alt={filme.nome} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </section>
    );
  }
};

export default Home;
