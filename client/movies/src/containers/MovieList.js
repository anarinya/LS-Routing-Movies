import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovies } from '../actions';

import { Breadcrumbs, Body } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.renderMovies = this.renderMovies.bind(this);
  }

  componentDidMount() {
    this.props.getMovies();
  }

  renderMovies() {
    const { movies } = this.props;
    return (
      <ul>
        { movies.map((movie, index) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <li>
              <span className="movie-title">{movie.title}</span>
              <span className="movie-metascore">
                {movie.metascore} / 100
              </span>
            </li>
          </Link>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="MovieList">
        <Breadcrumbs />
        <Body>
          <div className="directory-heading">
            <h3>Movie Directory</h3>
            <div className="directory-menu">
              <button className="btn btn-new">Add New Movie</button>
            </div>
          </div>
          { this.renderMovies() }
        </Body>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ movies: state.movies });
export default connect(mapStateToProps, { getMovies })(MovieList);