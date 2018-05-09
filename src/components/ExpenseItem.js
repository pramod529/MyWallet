import React from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

class ExpenseItem extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <tr>
        <td className="data-category" />
        <td className="data-payee">
          <p>{data.payee}</p>{' '}
          <p className="data-date-mobile">
            {moment(data.date_added).format('hh:mm A, DD/MM/YYYY')}
          </p>
        </td>
        <td className="data-date">
          {moment(data.date_added).format('hh:mm A, DD/MM/YYYY')}
        </td>
        <td className="data-comment">{data.comments}</td>
        <td className="data-amount text-ar currency-sign">{data.amount}</td>
      </tr>
    );
  }
}

export default withRouter(ExpenseItem);
