import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './components/Homepage.js';
import Profile from './components/Profile.js';
import Login from './components/Login.js';

const App = StackNavigator({
  Home: { screen: Login }
  // Main: { screen: Profile },
  // Login: { screen: Login }
});

export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello Sol!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
