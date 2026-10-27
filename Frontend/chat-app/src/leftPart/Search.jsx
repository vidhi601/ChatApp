
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Search({ onSearchChange }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearchChange(value);
  };

  return (
    <div className="h-[10vh]">
      <div className="px-2 py-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex space-x-2 gap-3">
            <label className="input w-[80%]">
              <input
                type="search"
                placeholder="Search by name or email"
                value={search}
                onChange={handleSearch}
              />
            </label>

            <button type="submit">
              <FaSearch className="text-4xl p-2 hover:bg-gray-600 rounded-lg" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
