import React, { Component } from 'react';
import BarList from './components/BarList'
import './App.css';
import ApolloClient from 'apollo-boost'
import 'typeface-roboto';
import { ApolloProvider } from 'react-apollo';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';




const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  headers: {
    "application": "1234",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU1MTQ1MTY2MywiZXhwIjoxNTUyNjYxMjYzfQ.aY3uGTlSen_0KkLOeLzokx46grjdCpvCzfdkf5gRv30"
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <AppBar className="header" position="static" color="default">
            <Toolbar>
              <img alt="bars_logo" src={ require('./assets/images/beer.png') } />
              <Typography variant="h5" color="inherit">
                Bars
              </Typography>
            </Toolbar>
          </AppBar>
          <BarList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
