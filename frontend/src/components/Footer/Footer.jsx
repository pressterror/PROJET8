import footer from "../../assets/footer.svg";
import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={footer} alt="Kasa - Accueil" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
