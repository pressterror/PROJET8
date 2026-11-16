import banner from "../../assets/banner.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="banner - kasa" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}
export default Banner;
