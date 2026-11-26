import logo from "../../assets/kasa_logo.svg";
import { NavLink } from "react-router";
import "./Header.css";
function Header() {
  return (
    <>
      <header className="header">
        <NavLink to="/">
          <img src={logo} alt="kasa_logo" />
        </NavLink>

        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">À propos</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
