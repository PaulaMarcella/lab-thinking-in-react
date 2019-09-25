import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const products = this.props.products;
    return (
      <div>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>{this.props.products.name}</td>
          <td>{this.props.products.price}</td>
        </tr>
      </div>
    );
  }
}
