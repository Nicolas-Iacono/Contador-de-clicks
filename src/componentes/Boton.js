import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClick }) {
    return (
        <button className={esBotonDeClic ? "boton-click" : "boton-reiniciar" }
        onClick={manejarClick}>
            {texto}
        </button>
    );
}

export default Boton;