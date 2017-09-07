import React, {Component} from 'react';
import {TextInput, AppRegistry, Button, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, AsyncStorage, ScrollView, Animated, Easing} from 'react-native';
import {StackNavigator} from 'react-navigation';
import style from '../styles/stylecomp.js';
import {Font} from 'expo';
import {BoxShadow} from 'react-native-shadow';

import axios from 'axios';

export default class Login extends Component {

  // Top of page title/naviation
  static navigationOptions = {
    title: '99 Bottles',
    header: null
  }

  constructor() {
    super();
    this.state = {
      id: 1,
      first_name: "",
      last_name: "",
      user_name: "",
      password: "",
      fontLoaded: false,
      rotate: '0deg',
      rotate2: '0deg',
      sign_up: {
        user_name: "",
        password: ""
      }

    }
    this.onSignUp = this.onSignUp.bind(this);
    this.onLogIn = this.onLogIn.bind(this);
  }



  async componentDidMount() {
    await Font.loadAsync({
      'MuktaMalar-Bold': require('../Assets/Fonts/MuktaMalar-Bold.ttf'),
      'MuktaMalar-Medium': require('../Assets/Fonts/MuktaMalar-Medium.ttf'),
      'MuktaMalar-Regular': require('../Assets/Fonts/MuktaMalar-Regular.ttf'),
      'Rubik-Medium': require('../Assets/Fonts/Rubik-Medium.ttf'),
      'Rubik-Regular': require('../Assets/Fonts/Rubik-Regular.ttf')
    });
    this.setState({
      fontLoaded: true
    })
  }

  // async onLogIn() {
  //   // console.log(this.props.navigation.state.params.user_id);
  //   let response = await
  //   fetch(`https://bottles99-api.herokuapp.com/users/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       user_name: this.state.user_name,
  //       password: this.state.password
  //     }),
  //
  //   })
  //
  //   let jsonResponse = await response.json()
  //   this.setState({id: jsonResponse[0].id}, async()=> {
  //     let userId= this.state.id.toString()
  //     try{
  //       await
  //       AsyncStorage.setItem('@UserId:key', userId);
  //     } catch (error){
  //       console.log(error);
  //     }
  //     this.props.navigation.navigate('Main', {
  //       userId: this.state.id})
  //   });
  //
  //   // this.props.navigation.navigate('Main');
  // }

  // http://localhost:3200/users/login
  // https://bottles99-api.herokuapp.com/users/login


  async onLogIn() {
    // console.log(this.props.navigation.state.params.user_id);
    try {
      let response = await
      fetch(`http://localhost:3200/users/login`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_name: this.state.user_name,
            password: this.state.password
          }),

        })
        .then((response) => {
          response.json()
          this.props.navigation.navigate('Profile', {})

        })

      // .then(cleanRes => cleanRes)


      // AsyncStorage.setItem('auth', JSON.stringify(response[0]), () =>
      // this.props.navigation.navigate('Main', {}))
      // console.log('login response', response);

    } catch (error) {
      console.log(error, 'there was a login error');
    }


    // this.props.navigation.navigate('Main');
  }

  // fetch('http://localhost:3200/users/new',
  // https://bottles99-api.herokuapp.com/users/new


  async onSignUp() {
    // console.log(this.state);
    try {
      let response = await fetch('http://localhost:3200/users/new', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_name: this.state.sign_up.user_name,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            password: this.state.sign_up.password
          }),
        })
        .then((response) => response.json())
        .then(cleanRes => cleanRes)

      AsyncStorage.setItem('auth', JSON.stringify(response[0]), () => this.props.navigation.navigate('Profile', {}))

    } catch (error) {
      console.log(error, 'there was an signup error');
    }
  }
  // console.log(this.state.login);

  clink = {
    fadeAnim: new Animated.Value(380),
    fadeAnim2: new Animated.Value(225),
    showText: new Animated.Value(0),
    rotateAnim2: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.clink.fadeAnim,
          {
            toValue: 138,
            duration: 1500,
          }
        ),
        Animated.timing(
          this.clink.fadeAnim2,
          {
            toValue: -18,
            duration: 1500,
          }
        ),
        ]),
        Animated.parallel([
          Animated.timing(
            this.clink.fadeAnim,
            {
              toValue: 166,
              duration: 200,
            }
          ),
          Animated.timing(
            this.clink.fadeAnim2,
            {
              toValue: 10,
              duration: 200,
            }
          ),
          Animated.timing(
            this.clink.showText,
            {
              toValue: 1,
              duration: 700,
            }
          ),Animated.timing(
            this.clink.rotateAnim2,
            {
              toValue: 30,
              duration: 200,
            }
          ),

      ]),
    ]).start();
    this.state.rotate2 = this.clink.rotateAnim2.interpolate({
      inputRange: [0, 30],
      outputRange: ['0deg', '30deg']
    })
  }



  //   Animated.timing(
  //     // Animate over time
  //     this.clink.fadeAnim,
  //     // The animated value to drive
  //     {
  //       toValue: 140,
  //       // Animate to opacity: 1 (opaque)
  //       duration: 2000,
  //       // Make it take a while
  //     }
  //   ).start();
  //   // Starts the animation
  // }

  render() {
    let {
      fadeAnim,
      fadeAnim2,
      showText,
      rotateAnim2
    } = this.clink;
    const AnimateStyle = {
      'width': 50,
      'height': 50,
      // 'left': 166,
      // from 380 to 138, then back to 166
      'left': fadeAnim

    }
    const AnimateStyle2 = {
      'width': 50,
      'height': 50,
      'bottom': 50,
      //  'right': 10,
      // from 225 to -18, then back to 10
      'right': fadeAnim2
    }
    const ShowCheeseText = {

    }
    const nextRoundStyle = {
      'opacity': showText,
      'width': '50%',
      'height': 50,
      'left': '43%',
      'marginTop': 100,
      // 'marginBottom': 10,
      // 'alignContent': 'center',
      'backgroundColor': 'rgba(0,0,0,0)'
    }
    const nextRoundText = {
      'color': 'rgb(0,0,0)',
      'fontSize': 36,
      'fontFamily': 'ChalkboardSE-Bold',
    }
  //   const shadowOpt = {
  //     width:'100%',
  //     height:5,
  //     color:"#000",
  //     border:2,
  //     radius:3,
  //     opacity:0.2,
  //     x:0,
  //     y:3,
  //     style:{marginVertical:5}
  // }
    // <View style = {{backgroundColor: "transparent", flex: 1, top: 50}}>
    // <Text style = {style.titleStyle}>99 BOTTLES</Text>
    // <View>
    return (
      // <View style = {style.container}>
      // {this.state.fontLoaded ? (
      // <View style = {{alignItems: 'center', backgroundColor: '#FFDF64', flex: 1}}>
      <Image source={require('../styles/images/background.png')} style = {style.backGround} resizeMode={Image.resizeMode.stretch}>
        <View>
        <View style = {style.foamStyle}>
          <Image source={require('../styles/images/beerfoam.jpg')} style = {{width: '100%'}}><Text style ={style.titleStyle} >99 BOTTLES</Text></Image>
        </View>
        <View style ={{left: 325, marginTop: 10}}>
          <Animated.View style={AnimateStyle}>
            <Image source = {require('../styles/images/beermug2.png')}></Image>
          </Animated.View>
          <Animated.View style={AnimateStyle2}>
            <Image source = {require('../styles/images/beermug2reverse.png')}></Image>
          </Animated.View>
        </View>
        <Animated.View style = {nextRoundStyle}>
          <Text style = {nextRoundText}>
          Next rounds on me!
          </Text>
        </Animated.View>
          <View style ={style.container}>
          <Text style = {style.loginCreateStyle}>Please Login or Create an Account</Text>
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
              this.setState({password: value.trim()})}
              placeholder = 'Password'
              secureTextEntry = {true} />
              <TouchableOpacity onPress =     {this.onLogIn}>
                <View style = {style.buttonStyle}>
                  <Text style = {style.buttonText}>
                  Log In
                  </Text>
                </View>
              </TouchableOpacity>
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
              value = {this.state.sign_up.user_name}
              style = {style.form}
              onChangeText = {(value) =>
              this.setState({sign_up: value.trim()})}
              placeholder = 'Username' />
            <TextInput
              value = {this.state.sign_up.password}
              style = {style.form}
              onChangeText = {(value) =>
              this.setState({sign_up: value.trim()})}
              placeholder = 'Password'
              secureTextEntry = {true} />
              <TouchableOpacity onPress = {this.onSignUp} >

                <View style = {style.buttonStyle} >
                  <Text style = {style.buttonText} >
                  Sign Up
                  </Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
        </Image>
      // </View>
      // ): null
      // }
      // </View>
        // <View style = {style.splashRow}>
      // ): null
    // }
    );
  }
}
