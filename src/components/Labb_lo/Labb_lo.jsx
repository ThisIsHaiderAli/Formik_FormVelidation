import React, { useState } from 'react';

const data = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 30 },
];

const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);
    const filtered = data.filter((item) => item.name.toLowerCase().includes(value));
    setFilteredData(filtered);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <ul>
        {filteredData.map((item) => (
          <li key={item.name}>{item.name} ({item.age})</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;