import React from "react";
import "./Portifolio.css";
import ItemPortifolio from "../../itemPortifolio/itemPortifolio";
import portifolio from "./Portifolio.json";

function Portifolio() {
  return (
    <div className="portifolio">
      {portifolio.map((item, index) => (
        <ItemPortifolio
          key={index}
          link={item.link}
          image={item.image + index}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default Portifolio;
