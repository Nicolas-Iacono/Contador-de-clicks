import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './img/free-logo.svg'
import { useState } from 'react';

function App() {
  
  const [numClics, setNumClics] = useState(0);
  
  const manejarClick = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        className="freecodecamp-logo" 
        src={freeCodeCampLogo}
        alt="logo de freeCodeCamp" />
      </div>
      
      <div className='contenedor-titulo'>
        <h1 className='titulo'>freeCodeCamp</h1>
      </div>
        
      <Contador numClics={numClics} />
      
      <div className='contenedor-principal'>
        
        <Boton
        
        texto='Click'
        esBotonDeClic={true}
        manejarClick={manejarClick}/>
        
        <Boton
        
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClick={reiniciarContador}/>
      

      </div>

    </div>
  );
}

export default App;
