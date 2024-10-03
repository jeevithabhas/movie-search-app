const API_KEY = "d24429a3";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (query, type = "", page = 1) => {
  const response = await fetch(
    `${BASE_URL}&s=${query}&type=${type}&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
};

export const fetchMovieDetail = async (id) => {
  const response = await fetch(`${BASE_URL}&i=${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  return response.json();
};
