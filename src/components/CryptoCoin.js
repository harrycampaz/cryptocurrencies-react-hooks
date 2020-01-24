import React from 'react';

function CryptoCoin({crypto}) {
    return (
    <option value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
    );
}

export default CryptoCoin;