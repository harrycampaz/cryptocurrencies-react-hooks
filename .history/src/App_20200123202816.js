import React, { useState, useEffect } from 'react';
import image from './cryptomonedas.png';
import FormCrypto from './components/FormCrypto';
import Axios from 'axios';
import Spinner from './Utils/Spinner/Spinner';
function App() {


  const [coin, setCoin] = useState('');
  const [crytoCoin, setCrytoCoin] = useState('');
  const [loading, setLoading] = useState(false); 

  useEffect(() => {

    if(coin ==='') return;
    const cotizarCryptomoneda = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crytoCoin}&tsyms=${coin}`;

    
      console.log(url);
      
      const result = await Axios.get(url);

      console.log(result);
      
      setLoading(true)

    }

    cotizarCryptomoneda();
  },[coin,crytoCoin,  ])

  return (
   <div className="container">
     <div className="row">
       <div className="one-half column">
         <img src={image} alt="Imagen criptomonedas" className="logotipo"/>
       </div>
       <div className="one-half column">
         <h1>Coriza cryptomonedas</h1>
         <FormCrypto setCoin={setCoin} setCrytoCoin={setCrytoCoin}/>

         <Spinner/>
       </div>
     </div>
   </div>
  );
}

export default App;
