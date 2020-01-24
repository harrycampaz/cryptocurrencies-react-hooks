import React from 'react';
import image from './crytomonedas.png';
function App(props) {
  return (
   <div className="container">
     <div className="row">
       <div className="one-half column">
         <img src={image} alt="Imagen criptomonedas" className="logotipo"/>
       </div>
     </div>
   </div>
  );
}

export default App;
