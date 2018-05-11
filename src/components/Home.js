import React from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {removeExpense, addExpense, fetchExpenses} from './actions/index';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';
import ExpenseItem from './ExpenseItem';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
    };
  }
  removeExpense(key) {
    this.props.removeExpense(key);
  }
  render() {
    let expenseArr = this.state.expenses;
    let renderExpenseItems;
    renderExpenseItems = expenseArr.map(item => (
      <ExpenseItem key={item.amount} data={item} />
    ));
    return (
      <div className="container">
        <Link to="/AddToWallet">
          <button type="submit">Add Expense</button>
        </Link>
        <table className="data-table">
          <thead>
            <tr>
              <th className="title-category" />
              <th className="title-payee">Provider</th>
              <th className="title-date">Category</th>
              <th className="title-comment">Sub-Category</th>
              <th className="title-amount text-ar">Unit</th>
              <th className="title-payee">Quantity</th>
              <th className="title-payee">item</th>
              <th className="title-date">Date</th>
              <th className="title-comment">Comment</th>
              <th className="title-amount text-ar">Amount</th>
            </tr>
          </thead>
          <tbody>{renderExpenseItems}</tbody>
        </table>
      </div>
    );
  }
}
export default Home;
