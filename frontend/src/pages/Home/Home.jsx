import { useState, useEffect } from "react";
import { fetchProperties } from "../../services/properties";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import banner from "../../assets/banner.png";
function Home() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetchProperties().then((properties) => setProperties(properties));
  }, []);
  return (
    <>
      <Banner
        image={banner}
        title={
          <>
            Chez vous,
            <br className="mobile-break" />
            partout et ailleurs
          </>
        }
        className="home-banner banner"
      />
      <div className="card-gallery">
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </>
  );
}

export default Home;
