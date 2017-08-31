import React, { Component } from 'react';
import { TextInput, NumericInput, AppRegistry, Button, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, AsyncStorage, Scrollview, Animated, Easing, NativeModules } from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from '../styles/stylecomp.js';
import { Font } from 'expo';

export default class HomePage extends React.Component {

  static navigationOptions = { header:null }

  constructor () {
    super();
    this.state = {
      id: 1,
      user_name: "",
      number_beers: 0,
      location_name: "",
      location_id: 0,
      first_name: "",
      last_name: "",
      friend_name: "",
      beers: [],
      // password: "",
      fontLoaded: false,
    }
    // this.onSubmit = this.onSubmit.bind(this);
    this.onLogout = this.onLogout.bind(this);
    // this.fadeIn = this.fadeIn.bind(this);
    this.onCheers = this.onCheers.bind(this);
  }


  async onLogout (){
    // try {
    //   await AsyncStorage.removeItem('@UserId:key');
      this.props.navigation.navigate('Home');
    // } catch (error) {
    //   console.log(error);
    // }
  }

  getBeers = () => {
    fetch(`http://localhost:3200/users/${this.state.id}`, {
      method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(res => {
      console.log('res');
      // console.log('res', res);
      this.setState({beers:res})
      // console.log(this.state.beers, 'this.state.beers');
  })
  }

  componentDidMount() {
    this.getBeers()
  //   fetch(`http://localhost:3200/users/${this.state.id}`, {
  //     method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //   })
  //   .then(response => response.json())
  //   .then(res => {
  //     console.log('res');
  //     // console.log('res', res);
  //     this.setState({beers:res})
  //     // console.log(this.state.beers, 'this.state.beers');
  // })
}

  yourBeers (array) {


  }

  // async componentDidMount() {

    // let userId = this.props.navigation.state.params.user_id;

    // 1. get auth from local storage

    // let response = await
    // // users/login CORRECT ROUTE?
    // fetch(`https://bottles99-api.herokuapp.com/users/${userId}`, {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(res => res.json())
    // .then(auth => console.log(auth))


    async onCheers () {
      try {
        let response = await
        fetch('http://localhost:3200/users/cheers', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            first_name: this.state.first_name,
            friend_name: this.state.friend_name,
            number_beers: this.state.number_beers,
            location_name: this.state.location_name,
            id: this.state.id
          }),
        })
        .then((response) => response.json())
        const beersArr = this.state.beers;
        beersArr.push(response);
        this.getBeers()
        // console.log(beers);
        // this.setState({beers})
        // console.log(this.state);

        // })

        // AsyncStorage.setItem('auth', JSON.stringify(response[0]))
      }
      catch(error) {
        console.log(error, 'there was an onCheers error');
      }
    }



    // let jsonResponse = await response.json() this.setState({
    //   id: userId
    // })


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
        <View  style = {{justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFDF64', flex: 1, marginTop: 0}}>
          <View>
            {
              this.state.beers.map((e, i) => {
                console.log(e);
                return (
                  <View style= {{flexDirection:'row', justifyContent:'space-between', marginBottom: 25}} key ={i}>
                    <Text>Number of Beers</Text>
                      <Text>{e.number_beers}</Text>
                    <Text>NAME</Text>
                      <Text>{e.first_name}</Text>
                    <Text>FROM</Text>
                      <Text>{e.friend_name}</Text>
                    <Text>LOCATION</Text>
                      <Text>{e.location_name}</Text>
                  </View>
                )
              })
            }
          </View>

          <TextInput
            value = {this.state.first_name}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({first_name: value.trim()})}
            placeholder = 'First Name' />
          <TextInput
            value = {this.state.friend_name}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({friend_name: value.trim()})}
            placeholder = 'Friend Name' />
          <TextInput
            value = {this.state.number_beers.toString()}
            style = {style.form}
            keyboardType = 'numeric'
            onChangeText = {(value) =>
            this.setState({number_beers: value.trim()})}
            placeholder = 'Number of Beers' />
          <TextInput
            value = {this.state.location_name}
            style = {style.form}
            onChangeText = {(value) =>
            this.setState({location_name: value.trim()})}
            placeholder = 'Location Name' />
            <TouchableOpacity onPress = {this.onCheers} >
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
