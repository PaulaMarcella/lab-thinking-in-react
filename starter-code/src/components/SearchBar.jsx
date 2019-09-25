import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      products: this.props.products,
      filteredProducts: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSearch(event) {
    event.preventDefault();
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const filteredProducts = [...this.state.products].filter(products =>
      products.name.toLowerCase().includes(this.state.query.toLowerCase())
    );
    console.log(this.state);
    this.setState({
      filteredProducts: filteredProducts
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            placeholder="search"
            onChange={this.handleSearch}
            value={this.state.query}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
