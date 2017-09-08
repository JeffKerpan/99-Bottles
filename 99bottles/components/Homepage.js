import React, { Component } from 'react';
import { TextInput, NumericInput, AppRegistry, Button, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, AsyncStorage, ScrollView, Animated, Easing, NativeModules, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from '../styles/stylecomp.js';
import { Font } from 'expo';
import resolveAssetSource from 'resolveAssetSource';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import Table from 'react-native-simple-table';
// import DataFactory from '../mock/DataFactory';

export default class HomePage extends React.Component
{

  //Title/naviation at top of page
  static navigationOptions = { headerStyle: {backgroundColor: 'rgb(226, 226, 226)'}}
  //backgroundColor: '#FFDF64'

// Set state and bind button functions
  constructor () {
    super();
    this.state = {
      id: 1,
      user_name: "",
      // number_beers: 0,
      location_name: "",
      location_id: 0,
      first_name: "",
      last_name: "",
      friend_name: "",
      beers: [],
      // password: "",
      fontLoaded: false,
    }
    this.onLogout = this.onLogout.bind(this);
    this.onCheers = this.onCheers.bind(this);
  }


// Upon logout, navigate to login page
  async onLogout (){
      this.props.navigation.navigate('Home');
  }


  // http://localhost:3200/users/${this.state.id}
  // https://bottles99-api.herokuapp.com/users/${this.state.id}

// GET beers information per user id
  getBeers = () => {
    fetch(`https://bottles99-api.herokuapp.com/users/${this.state.id}`, {
      method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(res => {
      // console.log(res, 'TAZ');
      res.forEach(function(each) {
        each.location_name =  each.location_name.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ');

      })
      // console.log('res', res);
      this.setState({beers:res})
      // console.log(this.state.beers, 'this.state.beers');
    })
  }


// Get beers once component loads
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


    // http://localhost:3200/users/cheers
    // https://bottles99-api.herokuapp.com/users/cheers

// Upon clicking CHEERS button, POST new information
    async onCheers () {
      try {
        let response = await
        fetch('https://bottles99-api.herokuapp.com/users/cheers', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            first_name: this.state.first_name,
            friend_name: this.state.friend_name,
            number_beers: this.state.number_beers,
            location_name: this.state.location_name.trim(),
            id: this.state.id
          }),
        })
        .then((response) => {
          this.setState({
            first_name: '',
            friend_name: '',
            number_beers: '',
            location_name: ''
          })
          return response.json()
        })
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


// console.log([e.first_name, e.friend_name, e.number_beers, e.location_name]);


  render() {

    const tableHead = ['FOR', 'BEERS', 'LOCATION'];

    return (

      <Image source={require('../styles/images/beer.jpg')} style = {style.backGround} resizeMode={Image.resizeMode.stretch}>
        <Text style = {style.yourBeersStyle}>
        Beers For Friends
        </Text>
        <View style = {style.homePageStyle}>
          <ScrollView style={{flex: 2}}>
            <Table style={style.tableStyle}>
            <Row data={tableHead} style={style.tableHead} textStyle={style.tableHeadText}/>
            {
// Map over beers array to pull out information to display in table
              this.state.beers.map((e, i) => {
                const tableData = [
                  [e.friend_name, e.number_beers,  e.location_name]
                  ];
                return (

                  <View key ={i}>
                    <Rows data= {tableData} style={[style.tableRow, i%2 && {backgroundColor: '#ccc19f'}]} textStyle={style.tableText}/>
                  </View>
                )
              })
            }
            </Table>
          </ScrollView>
          <View style = {style.container2}>
            <TextInput
              value = {this.state.friend_name}
              style = {style.form}
              onChangeText = {(value) =>
              this.setState({friend_name: value.trim()})}
              placeholder = "Friend's Name"/>
            <TextInput
              value = {this.state.number_beers}
              style = {style.form}
              keyboardType = 'numeric'
              onChangeText = {(value) =>
              this.setState({number_beers: value.trim()})}
              placeholder = 'Number of Beers'/>
            <TextInput
              value = {this.state.location_name}
              style = {style.form}
              onChangeText = {(value) =>
              this.setState({location_name: value})}
              placeholder = 'Location Name'/>
              <TouchableOpacity onPress = {this.onCheers} >
                <View style = {style.buttonStyle}>
                  <Text style = {style.buttonText}>
                  CHEERS!
                  </Text>
                </View>
              </TouchableOpacity>
            <TouchableOpacity onPress = {this.onLogout}>
              <View style = {style.buttonStyle}>
                <Text style = {style.buttonText}>
                Log Out
                </Text>
              </View>
          </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }
}
