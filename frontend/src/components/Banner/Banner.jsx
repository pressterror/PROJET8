import "./Banner.css";

function Banner({ image, title, className }) {
  return (
    <div className={`banner ${className || ""}`}>
      <img src={image} alt="banner - kasa" />
      {title && <p className="banner-title">{title}</p>}
    </div>
  );
}

export default Banner;
