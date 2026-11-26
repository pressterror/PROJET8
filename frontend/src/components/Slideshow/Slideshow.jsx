import { useState } from "react";
import rightArrow from "../../assets/right-arrrow.svg";
import leftArrow from "../../assets/left-arrow.svg";
import "./Slideshow.css";
function Slideshow({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);
  function nextPicture() {
    setCurrentPicture((prev) => (prev + 1) % pictures.length);
  }
  function previousPicture() {
    setCurrentPicture((prev) => (prev - 1 + pictures.length) % pictures.length);
  }
  return (
    <div className="Slideshow">
      {pictures.length > 1 && (
        <button className="arrow left" onClick={previousPicture}>
          <img src={leftArrow} alt="Précédent" />
        </button>
      )}

      <img
        className="slides"
        src={pictures[currentPicture]}
        alt="Photo du logement"
      />
      {pictures.length > 1 && (
        <span className="counter">
          {currentPicture + 1}/{pictures.length}
        </span>
      )}

      {pictures.length > 1 && (
        <button className="arrow right" onClick={nextPicture}>
          <img src={rightArrow} alt="Suivant" />
        </button>
      )}
    </div>
  );
}

export default Slideshow;
