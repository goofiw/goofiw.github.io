import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.props.onSearchChange.bind(this);
    this.handleSubmit = this.props.onSearchSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <label>
          Name:
          <input type="text" value={this.props.searchValue} onChange={this.handleChange} />
        </label>
        <input id="search-button" type="submit" value="Find Near Me" />
      </form>
    );
  }
}

export default SearchForm;
