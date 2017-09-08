import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './components/Homepage.js';
import Profile from './components/Profile.js';
import Login from './components/Login.js';
import Yourbeers from './components/Yourbeers.js';

const App = StackNavigator({
  Home: { screen: Login },
  Profile: {screen: Yourbeers},
  Main: { screen: HomePage },
  // Login: { screen: Login }
});

export default App;
