import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
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
  useEffect(() => {
    if (!isLoading && !error && !property) {
      navigate("/404");
    }
  }, [isLoading, error, property, navigate]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }
  if (error) {
    return <div>Une erreur est survenue.</div>;
  }
  return (
    <main className="accommodation">
      <Slideshow className="Slideshow" pictures={property.pictures} />
      <div className="details">
        <div className="info">
          <div className="intro">
            <h1>{property.title}</h1>
            <p>{property.location}</p>
          </div>
          <div className="owner">
            <span>
              {property.host.name.split(" ")[0]}
              <br />
              {property.host.name.split(" ")[1]}
            </span>
            <img src={property.host.picture} alt={property.host.name} />
          </div>
        </div>
        <div className="info2">
          <div className="tags">
            <ul>
              {property.tags.map((tag) => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={star <= Number(property.rating) ? fullStar : emptyStar}
                alt="étoile"
              />
            ))}
          </div>
        </div>
        <div className="info3">
          <Collapse title="Description">{property.description}</Collapse>

          <Collapse title="Équipements">
            <ul>
              {property.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </main>
  );
}

export default Accommodation;
