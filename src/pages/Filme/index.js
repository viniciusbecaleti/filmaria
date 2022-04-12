import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./filme.css";
import { useState } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";

const Filme = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilme = async () => {
      const response = await API.get(`r-api/?api=filmes/${id}`);
      if (response.data.length === 0) return navigate("/");
      setFilme(response.data);
      setLoading(false);
    };

    loadFilme();
  }, [navigate, id]);

  const salvaFilme = () => {
    let minhaLista = JSON.parse(localStorage.getItem("favoritos")) || [];
    const hasFilme = minhaLista.some((item) => item.id === filme.id);
    if (hasFilme) {
      return toast.info("Este filme já está salvo em sua lista de favoritos!");
    }
    minhaLista.push(filme);
    localStorage.setItem("favoritos", JSON.stringify(minhaLista));
    toast.success(`${filme.nome} foi salvo na lista de favoritos!`);
  };

  if (loading) return <div className="loading"></div>;
  if (filme && !loading) {
    return (
      <section className="filme">
        <h2>{filme.nome}</h2>
        <img src={filme.foto} alt={filme.nome} />
        <p>{filme.sinopse}</p>
        <div className="botoes">
          <button className="botao" onClick={salvaFilme}>
            Salvar
          </button>
          <a
            className="botao"
            href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}
            target="_blank"
            rel="noreferrer"
          >
            Trailer
          </a>
        </div>
      </section>
    );
  }
};

export default Filme;
