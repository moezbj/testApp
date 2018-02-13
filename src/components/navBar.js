import React from 'react'
import {Text,View,Content,StyleSheet} from 'react-native'

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:"#51868a"
    },
    nav:{
      backgroundColor:"black",
      borderWidth:100
    }
  })
