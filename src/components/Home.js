import React from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {removeExpense, addExpense, fetchExpenses} from './actions/index';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';
import ExpenseItem from './ExpenseItem';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import { InputText } from 'primereact/components/inputtext/InputText';
import '../dist/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      cars: [
        {
          category: 'Volkswagen',
          subCategory: 'Volkswagen',
          unit: '1',
          quantity: '10',
          item: 'White',
          date: '18/10/2017',
          comment: ' Good Quality',
          amount: '$200000',
          provider: 'Volkswagen',
        },
        {
          category: 'Audi',
          subCategory: 'Audi',
          unit: '1',
          quantity: '10',
          item: 'White',
          date: '18/10/2017',
          comment: ' Good Quality',
          amount: '$200000',
          provider: 'Audi',
        },
        {
          category: 'Renault',
          subCategory: 'Renault',
          unit: '1',
          quantity: '10',
          item: 'White',
          date: '18/10/2017',
          comment: ' Good Quality',
          amount: '$200000',
          provider: 'Renault',
        },
        {
          category: 'BMW',
          subCategory: 'BMW',
          unit: '1',
          quantity: '10',
          item: 'White',
          date: '18/10/2017',
          comment: ' Good Quality',
          amount: '$200000',
          provider: 'BMW',
        },
        {
          category: 'Mercedes',
          subCategory: 'Mercedes',
          unit: '1',
          quantity: '10',
          item: 'White',
          date: '18/10/2017',
          comment: ' Good Quality',
          amount: '$200000',
          provider: 'Mercedes',
        },
        {
          category: 'Volvo',
          subCategory: 'Volvo',
          unit: '1',
          quantity: '10',
          item: 'White',
          date: '18/10/2017',
          comment: ' Good Quality',
          amount: '$200000',
          provider: 'Volvo',
        },
        {
          category: 'Honda',
          subCategory: 'Honda',
          unit: '1',
          quantity: '10',
          item: 'White',
          date: '18/10/2017',
          comment: ' Good Quality',
          amount: '$200000',
          provider: 'Honda',
        },
        {
          category: 'Jaguar',
          subCategory: 'Jaguar',
          unit: '1',
          quantity: '10',
          item: 'White',
          date: '18/10/2017',
          comment: ' Good Quality',
          amount: '$200000',
          provider: 'Jaguar',
        },
        {
          category: 'Ford',
          subCategory: 'Ford',
          unit: '1',
          quantity: '10',
          item: 'White',
          date: '18/10/2017',
          comment: ' Good Quality',
          amount: '$200000',
          provider: 'Ford',
        },
        {
          category: 'Fait',
          subCategory: 'Fait',
          unit: '1',
          quantity: '10',
          item: 'White',
          date: '18/10/2017',
          comment: ' Good Quality',
          amount: '$200000',
          provider: 'Fait',
        },
      ],
    };
    this.cols = [
      { field: 'category', header: 'Category' },
      { field: 'subCategory', header: 'Sub Category' },
      { field: 'date', header: 'Date' },
      { field: 'item', header: 'Item' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'amount', header: 'Amount' },
      { field: 'unit', header: 'Unit' },
      { field: 'provider', header: 'Provider' },
      { field: 'comment', header: 'Comment' },
    ];
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
    var dynamicColumns = this.cols.map((col, i) => {
      return (
        <Column
          key={col.field}
          className={'data-table-coloumn__' + col.field}
          field={col.field}
          header={col.header}
          sortable={true}
          filter={true}
          style={{ width: '140px' }}
        />
      );
    });
    var header = (
      <div style={{ textAlign: 'left' }}>
        <i className="fa fa-search" style={{ margin: '4px 4px 0 0' }} />
        <InputText
          type="search"
          onInput={e => this.setState({ globalFilter: e.target.value })}
          placeholder="Global Search"
          size="25"
        />
      </div>
    );
    return (
      <div className="data-table">
        <Link to="/AddToWallet">
          <button type="submit">Add Expense</button>
        </Link>

        <DataTable
          value={this.state.cars}
          style={{ fontSize: 'small' }}
          responsive={true}
          paginator={true}
          rows={10}
          sortMode="multiple"
          header={header}
          globalFilter={this.state.globalFilter}
          scrollable={true}
        >
          {dynamicColumns}
        </DataTable>
      </div>
    );
  }
}
export default Home;
