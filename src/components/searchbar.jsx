import React, { useState } from 'react';

export const Searchbar = ({ onSearch }) => {
  const [city, setCity] = useState('Bangkok');

  const handleSearch = () => {
    onSearch(city);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='searchbar'>
      <input
        type="text"
        placeholder='search city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
