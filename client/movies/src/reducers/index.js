import MoviesReducer from './MoviesReducer';
import MovieDetailsReducer from './MovieDetailsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  movie: MovieDetailsReducer
});

export default rootReducer;