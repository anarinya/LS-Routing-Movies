import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';

export const getMovies = () => {
  const promise = axios.get('http://localhost:5000/movies');

  return {
    type: GET_MOVIES,
    payload: promise
  };
};

export const getMovieDetails = (id) => {
  const promise = axios.get(`http://localhost:5000/movies/${id}`);

  return {
    type: GET_MOVIE_DETAILS,
    payload: promise
  };
};