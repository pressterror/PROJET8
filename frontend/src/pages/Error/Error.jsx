import { Link } from "react-router";
import "./Error.css";

function Error() {
  return (
    <main className="Error">
      <h1>404</h1>
      <p>
        <span>Oups! La page que</span>
        <span>vous demandez n'existe pas.</span>
      </p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default Error;
