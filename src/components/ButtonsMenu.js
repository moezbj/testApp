import React from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

export default class ButtonsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneway: false,
      roundtrip: false,
      multiple: false
    };
    this.oneWay = this.oneWay.bind(this);
    this.roundTrip = this.roundTrip.bind(this);
    this.multiple = this.multiple.bind(this);
  }
  oneWay() {
    this.setState({
      oneway: true,
      roundtrip: false,
      multiple: false
    });
  }
  roundTrip() {
    this.setState({
      oneway: false,
      roundtrip: true,
      multiple: false
    });
  }
  multiple() {
    this.setState({
      oneway: false,
      roundtrip: false,
      multiple: true
    });
  }

  render() {
    return (
      <View style={styles.main}>
        <TouchableHighlight
          onPress={this.oneWay}
          style={[styles.btn1, this.state.oneway ? { backgroundColor: 'orange' } : {}]}
          underlayColor={'orange'}
        >
          <Text style={styles.textStyle}>One Way</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.roundTrip}
          style={[styles.btn2, this.state.roundtrip ? { backgroundColor: 'orange' } : {}]}
          underlayColor={'orange'}
        >
          <Text style={styles.textStyle}>Round Trip</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.multiple}
          style={[styles.btn3, this.state.multiple ? { backgroundColor: 'orange' } : {}]}
          underlayColor={'orange'}
        >
          <Text style={styles.textStyle}>Multiple</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btn1: {
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 3,
    padding: 5
  },
  btn2: {
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 3,
    padding: 5
  },
  btn3: {
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 3,
    padding: 5
  }
});
