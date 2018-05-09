import React from 'react';
import { Button, SVGIcon } from 'react-md';
import { Link } from 'react-router';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      email: '',
      displayName: '',
    };
  }
  render() {
    console.log(this.state.authenticated);
    return (
      <header className="container">
        {/* <Link to="/">My Expense</Link> <Link className="primary-cta" to="/add-expense">ADD EXPENSE</Link>
        {this.state.authenticated ? <div>{this.state.displayName} <a href="#" onClick={this.logout.bind(this)}>Sign Out</a></div> : <Link to="/login">Login</Link>} */}
      </header>
    );
  }
}

export default Header;
