import React, { Component } from 'react';

class EditableField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.onDone = this.onDone.bind(this);
  }

  onDone() {
    this.props.onDone(this.refs.editor.value);
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
          defaultValue={this.props.defaultValue}
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
        <span
          onClick={() => {
            this.setState({ isEditing: true }, () => {
              this.refs.editor.focus();
            });
          }}
        >
          {this.props.children}
        </span>
      );
    }

    return component;
  }
}

const MovieList = props => (
  <ul>
    {props.movies.map(movie =>
      <li key={movie.imdbID}>
        <EditableField
          defaultValue={movie.Year}
          onDone={newValue => {
            const newMovie = {
              ...movie,
              Year: newValue,
            }
            props.onEditMovie(newMovie);
          }}
        >
          {movie.Year}
        </EditableField>

        &nbsp;&nbsp;-&nbsp;&nbsp;

        <EditableField
          defaultValue={movie.Title}
          onDone={newValue => {
            const newMovie = {
              ...movie,
              Title: newValue,
            }
            props.onEditMovie(newMovie);
          }}
        >
          {movie.Title}
        </EditableField>
      </li>
    )}
  </ul>
);

export default MovieList;
