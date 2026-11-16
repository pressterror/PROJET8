import arrow from "../../assets/arrow.svg";

import { useState } from "react";
function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="Collapse">
      <div className="Collapse-header" onClick={handleToggle}>
        <h2>{title}</h2>
        <img src={arrow} alt="flèche" />
      </div>

      {isOpen && <div className="Collapse-content">{children}</div>}
    </div>
  );
}
export default Collapse;
