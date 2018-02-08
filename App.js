import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { Text, View } from 'react-native';

import RootStore from './app/stores';
import AppRoot  from './app/index';

const stores = {
  ...new RootStore()
};

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <AppRoot/>
      </Provider>
    );
  }
}
