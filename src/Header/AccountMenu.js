import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'react-md/lib/Lists/ListItem';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import { Link } from 'react-router-dom';
import RenderGravatar from '../common/Gravatar';
import './Header.scss';

class AccountMenu extends Component {
  render() {
    return (
      <RenderGravatar
        gravatarEmail={this.props.loggedInEmail}
        className="face-icon"
      />
    );
  }
}

AccountMenu.propTypes = {
  logoutUser: PropTypes.func,
  submit: PropTypes.func,
  loggedInEmail: PropTypes.string,
};

export default AccountMenu;
