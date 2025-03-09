const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;
const TMDB_BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

const fetchMoviePopular = async () => {
  return await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_KEY}&language=fr-FR`).then(
    (reponse) => reponse.json()
  );
};

const fetchMovieNowPlaying = async () => {
  return await fetch(`${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_KEY}&language=fr-FR`).then(
    (reponse) => reponse.json()
  );
};

const fetchMovieTopRated = async () => {
  return await fetch(`${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_KEY}&language=fr-FR`).then(
    (reponse) => reponse.json()
  );
};

const fetchMovieUpcoming = async () => {
  return await fetch(`${TMDB_BASE_URL}/movie/upcoming?api_key=${TMDB_KEY}&language=fr-FR&page=1`).then(
    (reponse) => reponse.json()
  );
};

export {
  fetchMovieNowPlaying,
  fetchMoviePopular,
  fetchMovieTopRated,
  fetchMovieUpcoming,
};
