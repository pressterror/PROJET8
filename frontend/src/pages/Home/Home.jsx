import { useState, useEffect } from "react";
import { fetchProperties } from "../../services/properties";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
function Home() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetchProperties().then((properties) => setProperties(properties));
  }, []);
  return (
    <>
      <Banner />
      <div className="card-gallery">
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </>
  );
}

export default Home;
