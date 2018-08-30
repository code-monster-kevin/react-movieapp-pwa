import React from 'react';
import './Movie.css';

const movie = props => {
  return (
    <div className="Movie">
      <h1>{props.title}</h1>
      <div className="box">{props.children}</div>
      <p>{props.description}</p>
    </div>
  );
};

export default movie;
