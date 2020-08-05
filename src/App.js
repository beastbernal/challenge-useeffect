import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from "./Counter"

function App() {
  const [toogle, setToogle] = useState(false);

  return (
    <div className="App">
      <p>
      {`Counter con valor de: ${toogle} `}
      
      </p>
      {!toogle && 
      <p>
        Bienvenido por favor de clic para iniciar
      </p>}
      <button onClick={() => setToogle(!toogle)}>Iniciar/Finalizar</button>
      {toogle && <Counter/>}
    </div>
  );
}

export default App;
