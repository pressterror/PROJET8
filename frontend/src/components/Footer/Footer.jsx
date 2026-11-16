import footer from "../../assets/footer.svg";
import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <Link to="/">
        <img src={footer} alt="Kasa - Accueil" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
export default Footer;
