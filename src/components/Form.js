import React, { Component } from 'react';
import { AppRegistry, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';

import DateTime from './DateTime';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FylingFrom: 'Flying From',
      FylingTo: 'Flying To'
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(newText) {
    this.setState({
      text: newText
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.onChange}
          value={this.state.FylingFrom}
        />
        <TextInput style={styles.input} onChangeText={this.onChange} value={this.state.FylingTo} />
        <View style={styles.date}>
          <TouchableOpacity style={styles.depart}>
            <DateTime />
          </TouchableOpacity>
          <TouchableOpacity style={styles.return}>
            <DateTime />
          </TouchableOpacity>
        </View>

        <TextInput style={styles.input} onChangeText={this.onChange} value={this.state.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51868a'
  },
  input: {
    height: 40,
    backgroundColor: '#085373',
    margin: 5
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  depart: {
    flex: 40,
    backgroundColor: '#085373',
    margin: 5,
    padding: 5
  },
  return: {
    flex: 40,
    backgroundColor: '#085373',
    margin: 5
  }
});
