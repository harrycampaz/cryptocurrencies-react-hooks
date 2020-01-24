import React from 'react';

const Cotizacion = ({result}) => { 
    
    if(Object.keys(result).length === 0) return null;
    return (
         <div className="resultado">
             <h2>Resultado</h2>

    <p className="precio">El precio es <span>{result.PRICE}</span></p>


         </div>   
    );
}

export default Cotizacion;