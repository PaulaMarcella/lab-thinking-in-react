import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const products = this.props.products;
    return (
      <tr>
        <td>{this.props.products.name}</td>
        <td>{this.props.products.price}</td>
      </tr>
    );
  }
}
