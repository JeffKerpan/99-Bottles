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
  height: 150,
  // left: -100,
  overflow: 'hidden',
  alignItems: 'center',
  backgroundColor: 'black'
},

buttonStyle:{
    width: 200,
    height:32,
    backgroundColor: '#BAA349',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "grey",
    borderWidth: 1.5,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,

    // marginLeft: 4
  },

  titleStyle:{
    width: 300,
    height: 60,
    backgroundColor: '#BAA349',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
    fontSize: 36,
    fontFamily: 'ChalkboardSE-Bold'
  },

  tableStyle: {
    width: 700
  },

  tableHead: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },

  tableText: {
    marginLeft: 5

  },

  tableRow: {
    height: 30,
    backgroundColor: 'gray'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 100
  },

  form: {
    height:40,
    width: 250,
    padding: 10,
    marginBottom: 4,
    borderColor: 'gray',
    borderWidth: .5,
    backgroundColor: '#FFEDAA',
    alignItems: 'center',
    justifyContent: 'center'

  },

})
