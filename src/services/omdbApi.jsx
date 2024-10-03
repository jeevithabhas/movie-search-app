const API_KEY = "d24429a3";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;


const getCachedData = (key) => JSON.parse(sessionStorage.getItem(key));
const setCachedData = (key, data) =>
  sessionStorage.setItem(key, JSON.stringify(data));

export const fetchMovies = async (query, type = "", page = 1) => {
  const cacheKey = `movies-${query}-${type}-${page}`;
  const cachedMovies = getCachedData(cacheKey);

  if (cachedMovies) return cachedMovies;

  try {
    const response = await fetch(
      `${BASE_URL}&s=${query}&type=${type}&page=${page}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - Failed to fetch movies`);
    }

    const data = await response.json();
    setCachedData(cacheKey, data);
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMovieDetail = async (id) => {
  const cacheKey = `movie-${id}`;
  const cachedMovie = getCachedData(cacheKey);

  if (cachedMovie) return cachedMovie;

  try {
    const response = await fetch(`${BASE_URL}&i=${id}`);

    if (!response.ok) {
      throw new Error(
        `Error: ${response.status} - Failed to fetch movie details`
      );
    }

    const data = await response.json();
    setCachedData(cacheKey, data); 
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
