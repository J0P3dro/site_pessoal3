import React from 'react';
import "../itemPortifolio/itemPortifolio.css";

function ItemPortifolio({ link, title, image }) { 
  return (
    <div className="item-portifolio">
        <a href={link} target="_blank"> 
            <img src={image} alt="Capa do Portifolio" />
            <p>{title}</p> 
        </a>
    </div>
  );
}

export default ItemPortifolio;
