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

titleStyle: {
  top: 40,
  zIndex: 10,
  fontSize: 40,
  backgroundColor: 'rgba(0,0,0,0)',
  fontFamily: 'ChalkboardSE-Bold',
  textAlign: 'center'
},

loginCreateStyle: {
  color:'black',
  fontSize: 23,
  marginBottom: 32,
  marginTop: 75,
  alignContent: 'center',
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

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 100
  },

  form: {
    height:40,
    width: 275,
    padding: 10,
    marginBottom: 4,
    borderColor: 'gray',
    borderWidth: .5,
    backgroundColor: '#FFEDAA',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgb(214,200,200)',
    shadowRadius: 121,
  },

})
