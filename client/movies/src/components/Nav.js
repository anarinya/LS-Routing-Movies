import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className="Nav">
      <Link to="/"><span className="brand">Movies</span></Link>
      <ul className="menu">
        <Link to="/movies"><li>Movie Directory</li></Link>
        <Link to="/new-movie"><li>Add Movie</li></Link>
      </ul>
    </div>
  );
};