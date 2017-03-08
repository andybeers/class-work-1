import React from 'react';

const SHORT_VALUE = 'short';
const FULL_VALUE = 'full';

export default class ChangeMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      plotValue: SHORT_VALUE,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const type = e.target.type;
    if (type === 'text') {
      this.setState({ searchValue: e.target.value });
    }
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onMovieChange(
            this.state.searchValue,
            this.state.plotValue
          );
        }}
      >
        <input
          ref='movieSearchInput'
          id='someId'
          name='someName'
          value={this.state.searchValue}
          onChange={this.onInputChange}
          type='text'
          style={{ padding: 10 }}
          placeholder='Movie search'
        />

        <button type='submit'>
          Search for new movie.
        </button>
      </form>
    );
  }
};
