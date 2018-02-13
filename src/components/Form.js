import React, { Component } from 'react';
import { AppRegistry, TextInput,StyleSheet } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
       text: '' };
       this.onChange=this.onChange.bind(this)
  }
  onChange(newText){
    this.setState({
      text:newText
    })
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        onChangeText={this.onChange}
        value={this.state.text}
      />
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:"#51868a"

    },
    input:{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1
    }
  })
