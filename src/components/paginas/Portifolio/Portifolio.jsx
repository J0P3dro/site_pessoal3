import React from "react";
import "./Portifolio.css";
import ItemPortifolio from "../../itemPortifolio/itemPortifolio";
import portifolio from "./Portifolio.json";
import api from "../../../assets/api";


function Portifolio({portifolio}) {
  return (
    <main>
      {portifolio.map((item, index) => (
        <ItemPortifolio
          key={index}
          link={item.link}
          image={item.image + index}
          title={item.title}
        />
      ))}
    </main>
  );
}

export default Portifolio;
