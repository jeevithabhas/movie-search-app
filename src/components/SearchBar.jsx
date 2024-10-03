import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="px-2 py-4 border border-gray-400 rounded w-80 text-l uppercase"
      />
      <button
        type="submit"
        className="bg-sky-600 text-white font-bold p-2 ml-2 rounded hover:bg-sky-900"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
