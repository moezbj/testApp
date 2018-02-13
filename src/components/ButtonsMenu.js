import React from 'react'
import {View,StyleSheet,Button,Text,TouchableOpacity} from 'react-native'

export default class ButtonsMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <View style={styles.main}>

      <View style={styles.btn1}>
      <TouchableOpacity><Text>One way</Text></TouchableOpacity>
      </View>

      <View style={styles.btn2}>
      <TouchableOpacity><Text>Round Trip</Text></TouchableOpacity>
      </View>

      <View style={styles.btn3} >
        <TouchableOpacity><Text>Multiple Destination</Text></TouchableOpacity>
      </View>

      </View>
   )
  }
}
const styles = StyleSheet.create({
    main:{
      flexDirection:"row",
      justifyContent:"center",
    },
    btn1:{
      borderRadius:5,
      backgroundColor:"white",
      margin:3,
      padding:5
    },
  btn2:{
    borderRadius:5,
    backgroundColor:"white",
    margin:3,
    padding:5
  },
  btn3:{
    borderRadius:5,
    backgroundColor:"white",
    margin:3,
    padding:5

  }
})
