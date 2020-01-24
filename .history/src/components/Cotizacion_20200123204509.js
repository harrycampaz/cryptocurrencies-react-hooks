import React from 'react';

const Cotizacion = ({result}) => { 
    
    if(Object.keys(result).length === 0) return null;
    return (
         <div className="resultado">
             <h2>Resultado</h2>

    <p className="precio">El precio es <span>{result.PRICE}</span></p>

<p>Precio mas alto del dia <span>{result.HIGHDAY}</span></p>


<p>Variacion ultima 24 horas <span>{result.CHANGE24HOUR}</span></p>
<p>Precio mas bajo del dia <span>{result.LOWDAY}</span></p>

<p>Ultima Actualizacion<span>{result.LASTUPDATE}</span></p>
         </div>   
    );
}

export default Cotizacion;