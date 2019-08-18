
const API_KEY = "9195decf";

//fetch search data from omdb api
export const getMoviesFromApi = async (value) => {
  return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response.Search;
      })
      .catch((error) => {
        throw error;
      });
};

//fetch ID from omdb api
export const fetchMovieById = async (movieId) => {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`;
  try {
    const response = await fetch(url);
    const results = await response.json();
    return results;
  } catch (error) {
    throw error;
  }
};