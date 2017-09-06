import {StyleSheet} from 'react-native';

export default StyleSheet.create({

backGround:{
  flex: 1,
  alignSelf: 'stretch',
  width: null,
  alignItems: 'center',
  justifyContent: 'center'
},

foamStyle: {
  width: 1000,
  height: 123,
  // left: -100,
  overflow: 'hidden',
  alignItems: 'center',
  backgroundColor: 'black'
},

titleStyle: {
  top: 25,
  zIndex: 10,
  fontSize: 45,
  backgroundColor: 'rgba(0,0,0,0)',
  fontFamily: 'ChalkboardSE-Bold',
  textAlign: 'center'
},

loginCreateStyle: {
  color:'black',
  fontSize: 21,
  marginBottom: 20,
  marginTop: 50,
  alignContent: 'center',
  justifyContent: 'center',
  fontFamily: 'ChalkboardSE-Regular', backgroundColor: 'rgba(0,0,0,0)'
},

buttonStyle:{
    width: 250,
    height:36,
    backgroundColor: '#BAA349',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "grey",
    borderWidth: 1.5,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,
  },

  buttonText: {
    color: 'black',
    fontFamily: 'ChalkboardSE-Bold',
    fontSize: 18
  },

  homePageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    marginTop: 10
  },

  tableStyle: {
    width: 700,
    // height: 340,
    borderWidth: 0.5,
    marginBottom: 25,
    shadowColor: 'rgb(214,200,200)',
    shadowRadius: 12,
  },

  tableHead: {
    height: 60,
    backgroundColor: 'black',

    // #f0f0f0
    // #fff
    // #333
    // #DFF5F2
    // #a59972
    // #6b6244
    // #a59972

  },

  tableHeadText: {
    marginLeft: 5,
    fontFamily: 'ChalkboardSE-Bold',
    fontSize: 23,
    color: 'white',
    justifyContent: 'center'
  },

  tableText: {
    marginLeft: 5,
    fontFamily: 'ChalkboardSE-Regular',
    fontSize: 20,
    color: 'rgb(25,25,25)',
  },

  tableRow: {
    height: 40,
    backgroundColor: 'rgb(236, 236, 236)',
  },

  containerNextRound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },

  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 250
  },

  container2: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 75,
    // paddingBottom: 250
  },

  form: {
    height:40,
    width: 300,
    padding: 10,
    marginBottom: 4,
    borderColor: 'gray',
    borderWidth: .5,
    backgroundColor: '#FFEDAA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // opacity: 1,
    // left: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // shadowColor: 'gray',
    // shadowRadius: 100,
    // shadowOffset: {width: 10, height: 10},
    // shadowOpacity: 0.8
  },

})
