import React from 'react';
import { Text, View, Content, StyleSheet, TouchableOpacity } from 'react-native';

export default class Search extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}> Search </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'green',
    height: 40,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});
