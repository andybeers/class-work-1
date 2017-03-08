import React, { Component } from 'react';

import ChangeMovie from './ChangeMovie';
import MovieList from './MovieList';

export default class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: false,
    };
  }

  doFetch(movieTitle) {
    this.setState({ isLoading: true });

    fetch(`http://www.omdbapi.com/?s=${movieTitle}&plot=short&r=json`)
      .then(res => res.json())
      .then(movies => {
        return Promise.all(movies.Search.map(movie => {
          return fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&plot=short&r=json`)
                .then(res => res.json());
        }));
      })
      .then(movies => {
        this.setState({ movies: movies, isLoading: false });
      });
  }

  componentDidMount() {
    this.doFetch('Star Wars');
  }

  render() {
    return (
      <div>
        <ChangeMovie onMovieChange={() => {
          this.doFetch('Back To The Future');
        }}/>

        {this.state.isLoading ? 'Loading!' : null}

        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
