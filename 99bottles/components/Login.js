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
      first_name: "",
      last_name: "",
      user_name: "",
      password: "",
      fontLoaded: false
    }
    this.onSubmit = this.onSubmit.bind(this);
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
    this.setState({ fontLoaded: true })
  }

  // async onSubmit () {
  //   let response = await fetch('http://localhost:3200/', {
    // let response = await fetch('https://bottles99-api.herokuapp.com/users/create', {
      // method: 'GET',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      // }
      // body: ({
      //   message: 'HERE'
        // firstName: this.state.firstname,
        // lastName: this.state.lastname,
        // userName: this.state.username,
        // password: this.state.password
      // })
    // })
    //   let jsonResponse = await response.json()
    //   console.log(jsonResponse);

      // this.setState({
      //   id: 1,
      //   firstname: "",
      //   lastname: "",
      //   username: "",
      //   password: ""
      // }, async () => {
      //   let userId = this.state.id.toString()
      //   try {
      //     await AsyncStorage.setItem('@UserId:key', userId);
      //   } catch (error) {
      //     console.log(error);
      //   }
      //   this.props.navigation.navigate('Main', {
      //     userId: this.state.id})
      //   });
      // }
    // })

    // componentDidMount() {
    //   return fetch('https://bottles99-api.herokuapp.com/users')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(responseJson);
    //   });
    // }

    onSubmit = async () => {
      console.log(this.state);
        let response = await fetch('http://localhost:3200/users/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ user_name: this.state.user_name, first_name: this.state.first_name, last_name: this.state.last_name })
        })
        // .then(() => this.setState({ newAmount: 0 }));
      }

    render() {
      return (
        // <View style = {style.container}>
      // {this.state.fontLoaded ? (
      <View style = {{backgroundColor: '#FFDF64'}}>
        <View style = {{backgroundColor: "transparent", top: 50}}>
          <Text style = {{color: 'black', fontSize: 36, marginTop: 5, textAlign: 'center'}}>99 BOTTLES</Text>
          <Image source = {require('../styles/images/beermug2.png')} style = {{marginBottom: 32, position: 'relative'}}></Image>

          <Text style = {{color:'black', fontSize: 23, textAlign: 'center', marginBottom: 23}}>Please Login or Create an Account</Text>

          <TextInput
            value = {this.state.user_name}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({user_name: value.trim()})}
            placeholder = 'Username' />
          <TextInput
            value = {this.state.password}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({hashed_password: value.trim()})}
            placeholder = 'Password'
            secrureTextEntry = {false} />
            <TouchableHighlight onPress = {this.onSubmit}>
              <View style = {style.buttonStyle} >
                <Text style = {{color: 'black'}} >
                Log In
                </Text>
              </View>
            </TouchableHighlight>
          <TextInput
            value={this.state.first_name}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({first_name: value.trim()})}
            placeholder = 'Firstname' />
          <TextInput
            value = {this.state.last_name}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({last_name: value.trim()})}
            placeholder = 'Lastname' />
          <TextInput
            value = {this.state.user_name}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({user_name: value.trim()})}
            placeholder = 'Username' />
          <TextInput
            value = {this.state.password}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({hashed_password: value.trim()})}
            placeholder = 'Password'
            secrureTextEntry = {false} />
            <TouchableHighlight onPress = {this.onSubmit} >
              <View style = {style.buttonStyle} >
                <Text style = {{color: 'black'}} >
                Sign Up
                </Text>
              </View>
            </TouchableHighlight>

        </View>
      </View>
      // ): null
      // }
      // </View>
        // <View style = {style.splashRow}>
      // ): null
    // }
    );
  }
}
