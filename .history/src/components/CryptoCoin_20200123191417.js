import React from 'react';

function CryptoCoin({crypto}) {
    return (
    <option value="">{crypto.CoinInfo.Name}</option>
    );
}

export default CryptoCoin;