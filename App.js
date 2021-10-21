/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import Main from './Main';

const App = createStackNavigator(
  {
    Home: { screen: Home },
    Main: { screen: Main }
  },

  { initialRouteName: 'Home', headerMode: 'none' }

);

export default createAppContainer(App);
