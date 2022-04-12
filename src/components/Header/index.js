import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        Filmaria
      </Link>

      <Link to="/favoritos" className="favoritos">
        Favoritos
      </Link>
    </header>
  );
};

export default Header;
