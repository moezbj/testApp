import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class navBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>heey</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51868a'
  },
  nav: {
    backgroundColor: 'black',
    borderWidth: 100,
    position: 'absolute'
  }
});
