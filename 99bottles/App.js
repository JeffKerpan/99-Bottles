import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './components/Homepage.js';
import Profile from './components/Profile.js';
import Login from './components/Login.js';

const App = StackNavigator({
  Home: { screen: Login },
  Main: { screen: HomePage },
  // Login: { screen: Login }
});

export default App;
