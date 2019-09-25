import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    const products = this.props.products;
    return (
      <div>
        <table>
          <ProductRow products={products} />
        </table>
      </div>
    );
  }
}
