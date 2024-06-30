import React from "react";
import { Link } from "react-router-dom";
import './barraNavegacao.css'
function BarraNavegacao () {
    return (

        <nav>
            <ul>
            <li className='button'><Link to="/">Currículo</Link></li>
            <li className='button'><Link to="/portifolio">Portfólio</Link></li>
            <li className='button'><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      
    )
}

export default BarraNavegacao
