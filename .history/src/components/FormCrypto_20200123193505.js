import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import CryptoCoin from './CryptoCoin';
import Error from './Error';





function FormCrypto({setCoin, setCrytoCoin}) {

    const [crytoCoins, setCrytoCoins] = useState([]);

    const [coinOrige, setCoinOrige] = useState('');
    const [coinCotizar, setCoinCotizar] = useState('');

    const [error, setError] = useState(false);

    useEffect(()=> {

        fetchApi();
    
    },[]) 

    const fetchApi = async() => {
        const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
        const result = await Axios.get(url);
        setCrytoCoins(result.data.Data)
        
    }

    const cotizarMoneda = e => {
        e.preventDefault();

        if(coinCotizar === '' || crytoCoins ==='' ){
            setError(true);
            return;
        }
        setError(false);

        setCoin(coinCotizar)
        setCrytoCoin(crytoCoins)
    }


    const componente = (error) ? <Error msg = "Ambos campos sin obligatorios"/> : null;

    return (
       <form onSubmit ={cotizarMoneda}>
           {componente}
           <div className="row">
               <label htmlFor="Elige tu moneda">Elige tu moneda</label>
               <select  className="u-full-width" onChange={e => setCoinOrige(e.target.value)}>
                   <option value="">-- Elige tu moneda --</option>
                   <option value="USD">Dolar USA</option>
                   <option value="MXN">Peso Mexicano</option>
                   <option value="GBP">Libra</option>
                   <option value="EUR">EURO</option>
               </select>
           </div>
           <div className="row">
               <label htmlFor="Elige tu criptomoneda">Elige tu criptomoneda</label>
               <select className="u-full-width" onChange={e => setCoinCotizar(e.target.value)} >
               <option value="">-- Elige tu Cryptomoneda --</option>
                   {crytoCoins.map(crypto => (
                        <CryptoCoin  key={crypto.CoinInfo.Id} crypto={crypto} />
                   ))}
               </select>
           </div>

           <input type="submit" value="Calcular" className = "button-primary u-full-width"/>
       </form>
    );
}

export default FormCrypto;