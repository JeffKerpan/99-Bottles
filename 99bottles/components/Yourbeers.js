import React, { Component } from 'react';
import { TextInput, NumericInput, AppRegistry, Button, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, AsyncStorage, ScrollView, Animated, Easing, NativeModules, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from '../styles/stylecomp.js';
import { Font } from 'expo';
import resolveAssetSource from 'resolveAssetSource';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import Table from 'react-native-simple-table';
// import DataFactory from '../mock/DataFactory';

// const HEADER_PATTERN = resolveAssetSource(require('../styles/images/beerfoam.png'));

export default class HomePage extends React.Component {

  //Title/naviation at top of page
  static navigationOptions = { headerStyle: {backgroundColor: '#FFF6D4'}}
  //backgroundColor: '#FFDF64'
  // static navigationOptions = { navigationBarBackgroundImage={require('../styles/images/beerfoam.png')}
  // }

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
    // this.onSubmit = this.onSubmit.bind(this);
    this.onBuyBeers = this.onBuyBeers.bind(this);
    this.onLogout = this.onLogout.bind(this);
    // this.onCheers = this.onCheers.bind(this);
  }

  async onBuyBeers (){
    // try {
    //   await AsyncStorage.removeItem('@UserId:key');
      this.props.navigation.navigate('Main');
    // } catch (error) {
    //   console.log(error);
    // }
  }
  async onLogout (){
    // try {
    //   await AsyncStorage.removeItem('@UserId:key');
      this.props.navigation.navigate('Home');
    // } catch (error) {
    //   console.log(error);
    // }
  }

  // getBeers = () => {
  //   fetch(`http://localhost:3200/users/${this.state.id}`, {
  //     method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //   })
  //   .then(response => response.json())
  //   .then(res => {
  //     console.log(res);
  //     // res = res.split(' ').map(e => e.location_name[0].toUpperCase() + e.location_name.slice(1)).join(' ');
  //     res.forEach(function(each) {
  //       each.location_name =  each.location_name.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ');
  //
  //     })
  //     // console.log('res', res);
  //     this.setState({beers:res})
  //     // console.log(this.state.beers, 'this.state.beers');
  //   })
  // }
  //
  // componentDidMount() {
  //   this.getBeers()
  // }


render() {
  const dataFromSever = [
   {
    "friend_name": "Brennen",
    "location_name": "Mountain Sun",
    "number_beers": 2,
  },
   {
    "friend_name": "Nick",
    "location_name": "Backcountry",
    "number_beers": 3,
  },
   {
    "friend_name": "Taz",
    "location_name": "Upslope",
    "number_beers": 1,
  },
  {
   "friend_name": "Katie",
   "location_name": "Avery",
   "number_beers": 4,
 },
 {
  "friend_name": "Jodie",
  "location_name": "Odd 13",
  "number_beers": 99,
},
   {
    "friend_name": "Tucker",
    "location_name": "Sanitas",
    "number_beers": 2,
  },
  {
   "friend_name": "Jordan",
   "location_name": "Finkle & Garf",
   "number_beers": 1,
 },
  {
   "friend_name": "Teddi",
   "location_name": "West Flanders",
   "number_beers": 5,
 },
 {
  "friend_name": "GP",
  "location_name": "Twisted Pine",
  "number_beers": 2,
 },
 {
  "friend_name": "Shelby",
  "location_name": "J Wells",
  "number_beers": 3,
},
 {
  "friend_name": "Kashi",
  "location_name": "Boulder Beer",
  "number_beers": 1,
},
{
 "friend_name": "Adam",
 "location_name": "Vision Quest",
 "number_beers": 2,
},
{
 "friend_name": "Shannon",
 "location_name": "Sanitas",
 "number_beers": 2,
},
{
 "friend_name": "Arlo",
 "location_name": "Crooked Stave",
 "number_beers": 1,
},
{
 "friend_name": "David",
 "location_name": "Asher",
 "number_beers": 2,
},
{
 "friend_name": "Sean",
 "location_name": "Celler West",
 "number_beers": 3,
},
{
 "friend_name": "Sol",
 "location_name": "Shmaltz Brewing",
 "number_beers": 3,
}
  ];
  const tableHead = ['FROM', 'BEERS', 'LOCATION'];
  return (
    // <View style = {{flex: 1}}>
    <Image source={require('../styles/images/background.png')} style = {style.backGround} resizeMode={Image.resizeMode.stretch}>
      <View style = {style.homePageStyle}>
        <Text style = {style.yourBeersStyle}>Beers From Friends</Text>
        <ScrollView style={{height: 280}}>
          <Table style={style.tableStyle2}>
          <Row data={tableHead} style={style.tableHead} textStyle={style.tableHeadText}/>
          {
            dataFromSever.map((e, i) => {
              const tableData = [
                [e.friend_name, e.number_beers, e.location_name]
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
        <TouchableOpacity onPress = {this.onBuyBeers} >
          <View style = {style.buttonStyle} >
            <Text style = {style.buttonText} >
            BUY BEERS
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
