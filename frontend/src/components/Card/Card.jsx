import { Link } from "react-router";
import "./Card.css";
import { generateSlug } from "../../utils/slug";

function Card({ property }) {
  return (
    <Link to={`/logement/${generateSlug(property.title, property.id)}`}>
      <article className="Card">
        <img src={property.cover} alt={property.title} />
        <h2>{property.title}</h2>
      </article>
    </Link>
  );
}

export default Card;
