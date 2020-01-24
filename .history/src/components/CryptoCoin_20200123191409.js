import React from 'react';

function CryptoCoin({crypto}) {
    return (
    <option value="">{crypto.CoinInfo.name}</option>
    );
}

export default CryptoCoin;