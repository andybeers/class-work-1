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

  doFetch(movieTitle, options = { plot: 'short' }) {
    this.setState({ isLoading: true });

    fetch(`http://www.omdbapi.com/?s=${movieTitle}&plot=short&r=json`)
      .then(res => res.json())
      .then(movies => {
        return Promise.all(movies.Search.map(movie => {
          return fetch(
            `http://www.omdbapi.com/?i=${movie.imdbID}&plot=${options.plot}&r=json`)
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
        <ChangeMovie onMovieChange={(movieTitle = 'Star Wars', plot = 'short') => {
          this.doFetch(movieTitle, { plot: plot });
        }}/>

        {this.state.isLoading ? 'Loading!' : null}

        <MovieList
          movies={this.state.movies}
          onEditMovie={(newMovie) => {
            const newMovies = this.state.movies.map(movie => {
              if (movie.imdbID === newMovie.imdbID) {
                return newMovie;
              }

              return movie;
            });

            this.setState({
              movies: newMovies,
            });
          }}
        />
      </div>
    );
  }
}
