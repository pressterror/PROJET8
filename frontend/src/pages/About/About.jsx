import Collapse from "../../components/Collapse/Collapse";
import Banner from "../../components/Banner/Banner";
import "./About.css";
import bannerAbout from "../../assets/banner-about.png";
function About() {
  return (
    <>
      <Banner image={bannerAbout} title="" className="about-banner" />
      <div className="about">
        <Collapse title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilté totale. Les
            photos sont conformes aux logements, et toutes les information sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse title="Respect">
          <p>
            La Bienveillance fait partie des valeurs fondatrice de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Service">
          <p>
            La qualité du service est au cœur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que se soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance.
          </p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>
            La sécurite est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurié établis par nos services. En laissant une note aussi bien a
            l'hôte qu'au locataire, cela permet à nos équipes de verifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes
          </p>
        </Collapse>
      </div>
    </>
  );
}

export default About;
