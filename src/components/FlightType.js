import React from 'react';
import { Text, View, Content, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class Extra extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity style={styles.airline}>
          <Text style={styles.text}> Preferd Airline </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flight}>
          <Text style={styles.text}> Direct Flight </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  airline: {
    flex: 40,
    backgroundColor: 'white',
    margin: 5,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flight: {
    flex: 40,
    backgroundColor: 'white',
    margin: 5,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: 'blue'
  }
});
