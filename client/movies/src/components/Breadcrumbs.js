import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className="Breadcrumbs">
      <div className="container">
        <Link to="/">Movies</Link>
        { props.page ? ` | ${props.page}` : '' }
      </div>
    </div>
  );
};