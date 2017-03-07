import React, { Component } from 'react';

class EditableTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.onDone = this.onDone.bind(this);
  }

  onDone() {
    const newMovie = {
      ...this.props.movie,
      Title: this.refs.editor.value,
    }
    this.props.onEditMovie(newMovie);
    this.setState({ isEditing: false });
  }

  render() {
    let component;
    if (this.state.isEditing) {
      component = (
        <input
          ref='editor'
          style={{
            width: 500,
            padding: 10,
          }}
          type='text'
          defaultValue={this.props.movie.Title}
          onKeyDown={e => {
            if (e.which === 13) {
              this.onDone()
            }

            if (e.keyCode === 27) {
              this.setState({ isEditing: false })
            }
          }}
          onBlur={this.onDone}
        />
      );
    } else {
      component = (
        <div
          onClick={() => {
            this.setState({ isEditing: true }, () => {
              this.refs.editor.focus();
            });
          }}
        >
          {this.props.movie.Title}
        </div>
      );
    }

    return component;
  }
}

const MovieList = props => (
  <ul>
    {props.movies.map(movie =>
      <li key={movie.imdbID}>
        <EditableTitle
          movie={movie}
          onEditMovie={props.onEditMovie}
        />
      </li>
    )}
  </ul>
);

export default MovieList;
