import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
      //   products: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSearch(event) {
    event.preventDefault();
    console.log(this.state.query);
    this.setState({});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.event.target.value);
    this.setState({
      query: event.target.value
    });
    this.setState({});
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            placeholder="search"
            onChange={this.handleSearch}
            value={this.state.query}
          />
          <button type="submit" onSubmit={this.handleSubmit}>
            Search
          </button>
        </form>
      </div>
    );
  }
}
