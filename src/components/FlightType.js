import React from 'react';
import { Text, View, Content, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class Extra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      airLine: '',
      direct: ''
    };
  }
  render() {
    return (
      <View style={styles.main}>
        <TextInput
          style={styles.airLine}
          onChangeText={this.onChangeFrom}
          value={this.state.airLine}
          placeholder="Preferd AirLine"
          placeholderTextColor="blue"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.direct}
          onChangeText={this.onChangeFrom}
          value={this.state.direct}
          placeholder="Direct Flight"
          placeholderTextColor="blue"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 18,
    color: 'blue'
  },
  airLine: {
    flex: 40,
    height: 40,
    margin: 5,
    backgroundColor: 'white'
  },
  direct: {
    flex: 40,
    height: 40,
    margin: 5,
    backgroundColor: 'white'
  }
});
