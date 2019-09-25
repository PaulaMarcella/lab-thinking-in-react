import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  render() {
    const products = this.props.products;
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar products={products} />

        {products.map(products => (
          <ProductTable products={products} />
        ))}
      </div>
    );
  }
}

export default FilterableProductTable;
