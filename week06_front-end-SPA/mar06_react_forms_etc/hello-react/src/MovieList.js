import React from 'react';

const MovieList = props => (
  <ul>
    {props.movies.map(movie =>
      <li key={movie.imdbID}>{movie.Title}</li>
    )}
  </ul>
);

export default MovieList;
