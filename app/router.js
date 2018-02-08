import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './containers/Home';
import Details from './containers/Details';
import EditPerson from './containers/Edit';

const stackNavigatorConfig = {
  initialRouteName: 'Home',
};

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: Details,
  },
  Edit: {
    screen: EditPerson
  }
}, stackNavigatorConfig);

export default class Router extends Component {
  render() {
    return <RootStack />;
  }
}
