import { GET_MOVIE_DETAILS } from '../actions';

export default (movie = {}, action) => {
  switch(action.type) {
    case GET_MOVIE_DETAILS:
      return action.payload.data;
    default:
      return movie;
  }
}