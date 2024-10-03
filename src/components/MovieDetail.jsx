import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../services/omdbApi"; 

function MovieDetail({ setIsFaded }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovieDetail(id);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    getMovie();

    setIsFaded(true);

    return () => {
      setIsFaded(false);
    };
  }, [id, setIsFaded]);

  if (!movie)
    return <p className="text-xl text-stone-800 font-bold">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        {/* Movie Poster */}
        <div className="md:w-1/3">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full md:w-64 mx-auto"
          />
        </div>

        
        <div className="md:w-2/3 md:ml-4">
          <h1 className="text-4xl font-bold mb-2 text-sky-900">
            {movie.Title}
          </h1>
          <p className="text-black font-semibold text-sm mb-2">
            <strong className="text-red-900">Type:</strong> {movie.Type}
          </p>
          <p className="text-black font-semibold text-sm mb-2">
            <strong className="text-red-900">Released:</strong> {movie.Released}
          </p>
          <p className="text-black font-semibold text-sm mb-2">
            <strong className="text-red-900">Runtime:</strong> {movie.Runtime}
          </p>
          <p className="text-black font-semibold text-sm mb-2">
            <strong className="text-red-900">Genre:</strong> {movie.Genre}
          </p>
          <p className="text-black font-semibold text-sm mb-2">
            <strong className="text-red-900">Director:</strong> {movie.Director}
          </p>
          <p className="text-black font-semibold text-sm mb-2">
            <strong className="text-red-900">Writer:</strong> {movie.Writer}
          </p>
          <p className="text-black font-semibold text-sm mb-2">
            <strong className="text-red-900">Cast:</strong> {movie.Actors}
          </p>
          <p className="text-black font-semibold text-sm mb-2">
            <strong className="text-red-900">Language:</strong> {movie.Language}
          </p>
          <p className="text-black font-semibold text-sm mb-2">
            <strong className="text-red-900">Country:</strong> {movie.Country}
          </p>
          <p className="text-black font-semibold text-sm mb-2">
            <strong className="text-red-900">Awards:</strong> {movie.Awards}
          </p>
          <p className="text-black font-semibold text-sm mb-2">
            <strong className="text-red-900">Plot:</strong> {movie.Plot}
          </p>

          {/* Ratings */}
          <h2 className="text-lg font-bold mt-4 text-sky-900">Ratings</h2>
          <ul>
            {movie.Ratings.map((rating) => (
              <li
                key={rating.Source}
                className="text-black font-semibold text-sm mb-2"
              >
                <strong className="text-red-900">{rating.Source}:</strong>{" "}
                {rating.Value}
              </li>
            ))}
          </ul>

          {/* Box Office and Production Details */}
          {movie.BoxOffice && (
            <p className="text-black font-semibold text-sm mb-2">
              <strong>Box Office:</strong> {movie.BoxOffice}
            </p>
          )}
          {movie.Production && (
            <p className="text-black font-semibold text-sm mb-2">
              <strong>Production:</strong> {movie.Production}
            </p>
          )}

          {/* Website */}
          {movie.Website && (
            <p className="text-black font-semibold text-sm mb-2">
              <strong>Website:</strong>{" "}
              <a
                href={movie.Website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {movie.Website}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
