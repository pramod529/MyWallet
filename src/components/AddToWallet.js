import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SelectField from './SelectField';
const category = [{ github: 'jedwatson', name: 'Jed Watson' }];
export default class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [{ github: 'jedwatson', name: 'Jed Watson' }],
      subcategory: [{ github: 'jedwatson', name: 'Jed Watson' }],
      item: '',
      unit: '',
      quantity: '',
      price: '',
      provider: '',
    };
  }
  handlePayee(e) {
    this.setState({
      provider: e.target.value,
    });
  }
  handleAmount(e) {
    this.setState({
      price: e.target.value,
    });
  }
  handleCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }
  handleUnit(e) {
    this.setState({
      unit: e.target.value,
    });
  }
  handleSubCategory(e) {
    this.setState({
      subcategory: e.target.value,
    });
  }
  handleItem(e) {
    this.setState({
      item: e.target.value,
    });
  }
  handleQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }
  handleComment(e) {
    this.setState({
      comment: e.target.value,
    });
  }
  addExpense(e) {
    e.preventDefault();
    const provider = this.state.provider;
    const price = this.state.price;
    const category = this.state.category;
    const subcategory = this.state.subcategory;
    const unit = this.state.unit;
    const quantity = this.state.quantity;
    const item = this.state.item;
    const comment = this.state.comment;
    this.props.postExpense(
      provider,
      price,
      category,
      subcategory,
      unit,
      quantity,
      item,
      comment
    );
    // Reset form fields
    this.setState({
      category: ['books', 'books'],
      subcategory: ['books', 'books'],
      item: '',
      unit: '',
      quantity: '',
      price: '',
      provider: '',
      comment: '',
    });
  }
  render() {
    return (
      <div className="container">
        <div className="page-title">
          <h2>ADD EXPENSE</h2>
        </div>
        <div className="form-container">
          <form onSubmit={this.addExpense.bind(this)}>
            <input
              type="text"
              placeholder="Provider"
              value={this.state.provider}
              onChange={this.handlePayee.bind(this)}
              required
            />
            <SelectField placeholder="Category" values={this.props.category} />
            <SelectField
              placeholder="Sub-Category"
              values={this.state.subcategory}
            />
            <input
              type="text"
              placeholder="Item"
              value={this.state.item}
              onChange={this.handleItem.bind(this)}
              required
            />
            <input
              type="text"
              placeholder="Unit"
              value={this.state.unit}
              onChange={this.handleUnit.bind(this)}
              required
            />
            <input
              type="text"
              placeholder="Quantity"
              value={this.state.quantity}
              onChange={this.handleQuantity.bind(this)}
              required
            />
            <textarea
              value={this.state.comment}
              onChange={this.handleComment.bind(this)}
              placeholder="Comment"
            />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}
// export default graphql(gql`
//   query FileList {
//     fileList {
//       filename
//       url
//     }
//   }
// `)(AddExpense);
