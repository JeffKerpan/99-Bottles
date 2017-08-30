import React, { Component } from 'react';
import { TextInput, AppRegistry, Button, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, AsyncStorage, Scrollview, Animated, Easing, NativeModules } from 'react-native';
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
    // this.onSubmit = this.onSubmit.bind(this);
    this.onLogout = this.onLogout.bind(this);
    // this.fadeIn = this.fadeIn.bind(this);
  }


  async onLogout (){
    // try {
    //   await AsyncStorage.removeItem('@UserId:key');
      this.props.navigation.navigate('Home');
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async componentDidMount() {
    let userId = this.props.navigation.state.params.user_id;
    let response = await
    // users/login CORRECT ROUTE?
    fetch(`https://bottles99-api.herokuapp.com/users/${userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    // let jsonResponse = await response.json() this.setState({
    //   id: userId
    // })
  }

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     'MuktaMalar-Bold': require('../Assets/Fonts/MuktaMalar-Bold.ttf'),
  //     'MuktaMalar-Medium': require('../Assets/Fonts/MuktaMalar-Medium.ttf'),
  //     'MuktaMalar-Regular': require('../Assets/Fonts/MuktaMalar-Regular.ttf'),
  //     'MuktaMalar-SemiBold': require('../Assets/Fonts/MuktaMalar-SemiBold.ttf'),
  //     'Rubik-Medium': require('../Assets/Fonts/Rubik-Medium.ttf'),
  //     'Rubik-Regular': require('../Assets/Fonts/Rubik-Regular.ttf')
  //   });
  //   this.setState({ fontLoaded: true },
  // async() =>{
  //     //DO I NEED THIS fadeIn
  //     // this.fadeIn()
  //     try {
  //       const value = await
  //       // IS UserId CORRECT?
  //       AsyncStorage.getItem('@UserId:key');
  //       if (value !== null) {
  //         let userID = parseInt(value);
  //         console.log(value, "ASYNC STORAGE");
  //         this.props.navigation.navigate('Main',
  //         { userId: userID })
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })
  // }


  render() {
    return (
      <View style = {{flex: 1}}>
        <View  style = {{alignItems: 'center', backgroundColor: '#FFDF64', flex: 1, marginTop: 50}}>
          <Text>Hello Sol!</Text>

          <TextInput
            value = {this.state.first_name}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({first_name: value.trim()})}
            placeholder = 'First Name' />
          <TextInput
            value = {this.state.last_name}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({last_name: value.trim()})}
            placeholder = 'Last Name' />
          <TextInput
            value = {this.state.number_beers}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({number_beers: value.trim()})}
            placeholder = 'Number of Beers' />
          <TextInput
            value = {this.state.location_name}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({location_name: value.trim()})}
            placeholder = 'Location Name' />
            <TouchableOpacity onPress = {this.onSubmit} >
              <View style = {style.buttonStyle} >
                <Text style = {{color: 'black'}} >
                CHEERS!
                </Text>
              </View>
            </TouchableOpacity>


          <TouchableOpacity onPress = {this.onLogout}>
            <View style = {style.buttonStyle}>
              <Text style = {{color: 'black'}}>
              Log Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
