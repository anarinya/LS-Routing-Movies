import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className="Nav">
      <Link to="/"><span className="brand">Movies</span></Link>
    </div>
  );
};