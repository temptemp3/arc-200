import React, { useState } from 'react';

const TokenSwap: React.FC = () => {
  const [token1, setToken1] = useState('Token1');
  const [token2, setToken2] = useState('Token2');

  const availableTokens: string[] = ['Token1', 'Token2', 'Token3', 'Token4']; // Add your token options here

  const handleToken1Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToken1(event.target.value);
  };

  const handleToken2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToken2(event.target.value);
  };

  const swapTokens = () => {
    const temp = token1;
    setToken1(token2);
    setToken2(temp);
  };

  return (
    <div>
      <label>
        Select Token 1:
        <select value={token1} onChange={handleToken1Change}>
          {availableTokens.map((token, index) => (
            <option key={index} value={token}>
              {token}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Select Token 2:
        <select value={token2} onChange={handleToken2Change}>
          {availableTokens.map((token, index) => (
            <option key={index} value={token}>
              {token}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={swapTokens}>Swap Tokens</button>
    </div>
  );
};

export default TokenSwap;
