import React, { useState, useEffect } from 'react';
import image from './cryptomonedas.png';
import FormCrypto from './components/FormCrypto';
function App() {


  const [coin, setCoin] = useState('');
  const [crytoCoin, setCrytoCoin] = useState('');

  useEffect(() => {
    const cotizarCryptomoneda = async () => {
      const url = `https://min-api.cryptocompare.com/data/price?fsym=${crytoCoin}&tsyms=${coin},JPY,EUR`;
    }
  })

  return (
   <div className="container">
     <div className="row">
       <div className="one-half column">
         <img src={image} alt="Imagen criptomonedas" className="logotipo"/>
       </div>
       <div className="one-half column">
         <h1>Coriza cryptomonedas</h1>
         <FormCrypto setCoin={setCoin} setCrytoCoin={setCrytoCoin}/>
       </div>
     </div>
   </div>
  );
}

export default App;
