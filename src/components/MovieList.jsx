import React, { useState, useEffect } from "react";
import { fetchMovies } from "../services/omdbApi";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import { Link } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState(""); 
  const [totalResults, setTotalResults] = useState(0); 

  const searchMovies = (q) => {
    setQuery(q);
    setPage(1);
    fetchData(q, type, 1); 
  };

  const fetchData = async (query, type, page) => {
    try {
      const data = await fetchMovies(query, type, page);
      if (page === 1) {
        setMovies(data.Search || []);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...data.Search]);
      }
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData(query, type, page);
    }
  }, [query, page, type]);

  const loadMore = () => {
    if (movies.length < totalResults) {
      setPage((prevPage) => prevPage + 1); 
    }
  };

  return (
    <div className="container mx-auto">
      <SearchBar onSearch={searchMovies} />
      <Filter setType={setType} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-transparent">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="border p-4 rounded shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-auto object-content hover:scale-150 "
            />
            <h3 className="text-xl font-bold mt-2">{movie.Title}</h3>
            <p className="text-stone-800 text-bold">{movie.Year}</p>
            <Link to={`/movie/${movie.imdbID}`}>
              <button className="flex shadow-lg mt-2 bg-blue-500 text-white font-bold py-1 px-2 rounded hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      {movies.length < totalResults && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Load More..
          </button>
        </div>
      )}
    </div>
  );
}

export default MovieList;
