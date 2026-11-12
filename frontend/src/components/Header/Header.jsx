import logo from "../../assets/kasa_logo.svg";
import { Link } from "react-router";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="Header">
        <Link to="/">
          <img src={logo} alt="kasa_logo" />
        </Link>

        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
