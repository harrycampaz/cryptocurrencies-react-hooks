import React from 'react';
import image from './cryptomonedas.png';
import FormCrypto from './components/FormCrypto';
function App(props) {
  return (
   <div className="container">
     <div className="row">
       <div className="one-half column">
         <img src={image} alt="Imagen criptomonedas" className="logotipo"/>
       </div>
       <div className="one-half column">
         <h1>Coriza cryptomonedas</h1>
         <FormCrypto/>
       </div>
     </div>
   </div>
  );
}

export default App;
