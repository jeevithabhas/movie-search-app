import React from "react";

function Filter({ setType }) {
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="flex justify-center my-4">
      <select
        onChange={handleTypeChange}
        className="p-2 border border-gray-400 rounded w-60"
      >
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>
    </div>
  );
}

export default Filter;
