import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class NavBar extends React.Component {
  render() {
    console.log(width, height);
    return (
      <View style={styles.container}>
        <Text>heey</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#51868a',
    position: 'absolute',
    top: 62,
    right: 0,
    width: width / 2,
    height: height / 2 - 60
  }
});
