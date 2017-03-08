import React from 'react';

const ChangeMovie = props => {
  return (
    <button onClick={props.onMovieChange}>
      Change movie to Back To The Future
    </button>
  );
};

export default ChangeMovie;
