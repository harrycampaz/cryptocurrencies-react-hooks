import React from 'react';

function FormCrypto(props) {
    return (
       <form action=""
       >

           <div className="row">
               <label htmlFor="Elige tu moneda">Elige tu moneda</label>
               <select  className="u-full-width" name="" id="">
                   <option value="">-- Elige tu moneda --</option>
                   <option value="USD">Dolar USA</option>
                   <option value="MXN">Peso Mexicano</option>
                   <option value="GBP">Libra</option>
                   <option value="EUR">EURO</option>
               </select>
           </div>
           <div className="row">
               <label htmlFor="Elige tu criptomoneda">Elige tu criptomoneda</label>
               <select className="u-full-width" name="" id="">
                   <option value="">Nada</option>
               </select>
           </div>
       </form>
    );
}

export default FormCrypto;