import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Filme from "./pages/Filme";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Erro from "./pages/Erro";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="filme/:id" element={<Filme />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="*" element={<Erro />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
