const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

const TRENDING_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
const GENRE_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=`;

export { TRENDING_URL, IMAGE_URL, GENRE_URL };
