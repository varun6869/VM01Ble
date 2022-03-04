import { StyleSheet } from 'react-native';
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
  
 export default StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      flex:1,
      backgroundColor: "#303d97",
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    device: {
      marginTop: 32,
      paddingHorizontal: 20,
      fontSize:20,
      fontWeight:'600',
      color: "#ffffff",
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: "#000000",
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: "#000000",
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    outputTitle: {
      color:"#ffffff",
      backgroundColor: "#d03b14",
      fontSize: 20,
      fontWeight:"bold",
      borderRadius:10,
      margin:20,
      padding:10,
    },
    output: {
      color:"#ffffff",
      backgroundColor: "#333333",
      fontSize: 15,
      margin: 20,
      borderRadius:10,
    },
    parameter:{
      backgroundColor:"#303d97",
      //margin:10,
      height:150,
      alignItems: 'center',
      justifyContent: 'center',
      //borderRadius:20,
    },
    para_style_1:{
      flexDirection:"row"
    },
    parameter_2:{
      color:"#ffffff",
      fontSize:15,
      margin:10,
      marginTop:10,
      fontWeight:"bold",
      textAlign:"center",
      alignItems: 'center',
  
  
    },
    parameter_1:{
      color:"#ffffff",
      fontSize:15,
      margin:10,
      marginTop:10,
      fontWeight:"bold",
      textAlign:"center",
      alignItems: 'center',
  
  
    },
    parameter_3:{
      flexDirection:"row",
      marginTop:40,
    },
    parameter_4:{
      color:"#FFFFFF",
      fontSize:15,
      margin:"10%",
      marginLeft:30,
      fontWeight:"bold"
    },
    button: {
      margin: 4,
      color:"#ffffff"
    },
  
  });
  