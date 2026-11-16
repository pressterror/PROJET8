import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "./Accommodation.css";
import { fetchProperties } from "../../services/properties";
import Collapse from "../../components/Collapse/Collapse.jsx";
import fullStar from "../../assets/full-star.svg";
import emptyStar from "../../assets/empty-star.svg";

import Slideshow from "../../components/Slideshow/Slideshow";
function Accommodation() {
  const { slug } = useParams();
  const id = slug.split("-").at(-1);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchProperties()
      .then((properties) => {
        setProperties(properties);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);
  const property = properties.find((property) => property.id === id);
  if (isLoading) {
    return <div>Chargement...</div>;
  }
  if (error) {
    return <div>Une erreur est survenue.</div>;
  }
  if (!property) {
    return <div>Logement introuvable</div>;
  }
  return (
    <main>
      <Slideshow pictures={property.pictures} />
      <div>
        <div>
          <h1>{property.title}</h1>
          <p>{property.location}</p>
        </div>
        <div>
          <span>{property.host.name}</span>
          <img src={property.host.picture} alt={property.host.name} />
        </div>
        <div>
          <ul>
            {property.tags.map((tag) => (
              <li className="tags" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <img
              key={star}
              src={star <= Number(property.rating) ? fullStar : emptyStar}
              alt="étoile"
            />
          ))}
        </div>
        <Collapse title="Description">{property.description}</Collapse>

        <Collapse title="Équipements">
          <ul>
            {property.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
}

export default Accommodation;
