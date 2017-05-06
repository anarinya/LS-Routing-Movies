import React from 'react';

export default (props) => {
  return (
    <div className="Body">
      <div className="container">
        { props.children }
      </div>
    </div>
  );
};