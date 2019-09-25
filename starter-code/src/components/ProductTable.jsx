import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    const products = this.props.products;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
            </tr>

            {products.map(products => (
              <ProductRow products={products} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
