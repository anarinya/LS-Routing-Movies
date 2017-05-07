import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';

import { Body } from '../components';

const fields = [
  { label: "Movie Title", name: "title" },
  { label: "Movie Director", name: "director" },
  { label: "Metascore", name: "metascore" },
  { label: "Movie Stars", name: "stars" }
];

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  componentWillMount() {
    this.resetState();
  }

  resetState() {
    this.setState({
      movie: {
        title: '',
        director: '',
        metascore: '',
        stars: ''
      },
      errors: {}
    });
  }

  handleChange(e) {
    const { movie, errors } = this.state;
    movie[e.target.name] = e.target.value;
    errors[e.target.name] = '';
    this.setState({
      movie,
      errors
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, director, metascore, stars } = this.state.movie;
    
    const movie = {
      title,
      director: director || 'Unknown',
      metascore: metascore.trim() && !isNaN(metascore) ? metascore : '0',
      stars: stars && stars.split(",")
    };

    if (!movie.title.trim()) {
      let errors = this.state.errors;
      errors.title = "Please enter a title";

      this.setState({
        errors
      });
      return;
    }

    this.props.addMovie(movie, () => {
      this.resetState();
      this.props.history.push('/');
    });
  }

  renderError(error) {
    return (
      <div className="form-error">{error}</div>
    );
  }

  renderField(label, name, key) {
    const error = this.state.errors[name];
    return (
      <div key={key} className="form-field">
        <div className="form-label">
          <label>{label}</label>
        </div>
        <input  
          name={name}
          value={this.state.movie[name]}
          className="form-input" 
          onChange={this.handleChange} 
        />
        { error ? this.renderError(error) : '' }
      </div>
    );
  }

  render() {
    return (
      <div className="AddMovie">
        <Body>
          <div className="directory-heading">
            <h2>Add New Movie</h2>
          </div>
          <form className="new-movie-form" onSubmit={ this.handleSubmit }>
            { fields.map((field, key) => (this.renderField(field.label, field.name, key) )) }
            <button type="submit">Save</button>
          </form>
        </Body>
      </div>
    );
  }
}

export default connect(null, { addMovie })(AddMovie);