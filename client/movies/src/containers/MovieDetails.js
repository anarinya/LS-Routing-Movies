import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetails } from '../actions';
import { Link } from 'react-router-dom';

import { Body, Breadcrumbs  } from '../components';

class MovieDetails extends Component {
  componentWillMount() {
    this.props.getMovieDetails(this.props.match.params.id);
  }

  render() {
    const { movie, movie: { title, director, metascore, stars } } = this.props;

    if (!movie) return (<div>Loading...</div>);

    return (
      <div className="MovieDetails">
        <Breadcrumbs page={ title } />
        <Body>
          <Link to="/"><button>Back</button></Link>
          <h2>{ title }</h2>
          <ul>
            <li><strong>Director</strong>: { director }</li>
            <li><strong>Metascore</strong>: { metascore } / 100</li>
            <li><strong>Stars</strong>: { stars && stars.join(", ") }</li>
          </ul>
        </Body>
      </div>
    );
  }
}

const mapStateToProps = ({ movie }) => ({ movie });

export default connect(mapStateToProps, { getMovieDetails })(MovieDetails);

