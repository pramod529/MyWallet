import React, { Component } from 'react';
import {
  ApolloProvider,
  ApolloClient,
  createBatchingNetworkInterface,
} from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AddToWallet from './components/AddToWallet';
import Home from './components/Home';
import Header from './Header/Header';

class App extends Component {
  render() {
    return <Header />;
  }
}

export default App;
