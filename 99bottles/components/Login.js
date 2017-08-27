import React, { Component } from 'react';
import { TextInput, AppRegistry, Button, StyleSheet, Text, View, TouchableHighlight, Image, AsyncStorage, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from '../styles/stylecomp.js';
import { Font } from 'expo';

export default class Login extends Component {

  static navigationOptions = {header:null}

  constructor () {
    super();
    this.state = {
      id: 1,
      firstname: "",
      lastname: "",
      username: "",
      password: ""
    }
    // this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync ({
      'MuktaMalar-Bold':
      require('../Assets/Fonts/MuktaMalar-Bold.ttf'),
      'MuktaMalar-Medium':
      require('../Assets/Fonts/MuktaMalar-Medium.ttf'),
      'MuktaMalar-Regular':
      require('../Assets/Fonts/MuktaMalar-Regular.ttf'),
      'Rubik-Medium':
      require('../Assets/Fonts/Rubik-Medium.ttf'),
      'Rubik-Regular':
      require('../Assets/Fonts/Rubik-Regular.ttf')
    });
  }

  async obSubmit () {
    let response = await fetch('https://bottles99-api.herokuapp.com/users/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        userName: this.state.username,
        password: this.state.password
      }),
    })

    let jsonResponse = await response.json()
    this.setState({
      id: jsonResponse[0].id,
      firstname: "",
      lastname: "",
      username: "",
      password: ""
    }, async () => {
      let userId = this.state.id.toString()
      try {
        await AsyncStorage.setItem('@UserId:key', userId);
      } catch (error) {
        console.log(error);
      }
      this.props.navigation.navigate('Main', {
        userId: this.state.id})
      });
    }

    render() {
      return (
        // <Image source = {require('../styles/resources/beermug.jpg')} style = {{marginBottom: 30}}></Image>
        <View style = {{backgroundColor: "transparent", position: 'absolute', top: 50}}>
          <Text style = {{color: 'white', fontFamily: 'MuktaMalar-Bold', fontSize: 36, marginTop: 5}}>99 BOTTLES</Text>
        </View>
        // <View style = {style.splashRow}>
      // ): null
    // }
  );
  }
}
