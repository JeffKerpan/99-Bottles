import React, { Component } from 'react';
import { TextInput, AppRegistry, Button, StyleSheet, Text, View, TouchableHighlight, Image, AsyncStorage, Scrollview } from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from '../styles/stylecomp.js';
import { Font } from 'expo';

export default class HomePage extends React.Component {

  static navigationOptions = { header:null }

  constructor () {
    super();
    this.state = {
      id: 0,
      user_name: "",
      password: "",
      fontLoaded: false,
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'MuktaMalar-Bold': require('../Assets/Fonts/MuktaMalar-Bold.ttf'),
      'MuktaMalar-Medium': require('../Assets/Fonts/MuktaMalar-Medium.ttf'),
      'MuktaMalar-Regular': require('../Assets/Fonts/MuktaMalar-Regular.ttf'),
      'MuktaMalar-SemiBold': require('../Assets/Fonts/MuktaMalar-SemiBold.ttf'),
      'Rubik-Medium': require('../Assets/Fonts/Rubik-Medium.ttf'),
      'Rubik-Regular': require('../Assets/Fonts/Rubik-Regular.ttf')
    });
    this.setState({ fontLoaded: true }, async() =>{
      //DO I NEED THIS fadeIn
      // this.fadeIn()
      try {
        const value = await
        // IS UserId CORRECT?
        AsyncStorage.getItem('@UserId:key');
        if (value !== null) {
          let userID = parseInt(value);
          console.log(value, "ASYNC STORAGE");
          this.props.navigation.navigate('Main',
          { userId: userID })
        }
      } catch (error) {
        console.log(error);
      }
    })
  }

  fadeIn () {
    Animated.timing(
      this.opacityValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.elastic(1)
      }
    ).start()
  }

  async onSubmit() {
    let response = await
    // users/login CORRECT ROUTE?
    fetch('https://bottles99-api.herokuapp.com/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        user_name: this.state.user_name,
        password: this.state.password
      }),
    })
    let jsonResponse = await response.json()
    this.setState({id:jsonResponse[0].id}, async() =>{
      let userID = this.state.id.toString()
      try {
        await AsyncStorage.setItem('@UserId:', userId);
      } catch (error) {
        console.log(error);
      }
      this.props.navigation.navigate('Main', {
        userId: this.state.id})
      });
    // })
  }

  render() {
    return (
      <Text>Hello Sol!</Text>
    );
  }

}
