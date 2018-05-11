import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import AccountMenu from './AccountMenu';

const Header = ({
  message,
  authStatus,
  logoutUser,
  handleToggleProfile,
  quickAddMessage,
  quickAddError,
}) => {
  const loggedInEmail = localStorage.getItem('id_email');
  return (
    <div id="header">
      <div id="header-content">
        <h5>My Wallet</h5>
        <p className="username_text">Pavana S N</p>
        <p className="date_text">5/11/2018</p>
        <AccountMenu
          submit={handleToggleProfile}
          logoutUser={logoutUser}
          loggedInEmail="Pavana.narasanna@cognizant.com"
          className="account-menu"
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  message: PropTypes.string,
  authStatus: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    passwordSetMessage: PropTypes.string,
    isError: PropTypes.bool,
  }).isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default Header;
