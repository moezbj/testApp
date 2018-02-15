import React from 'react';
import { Text, View, Content, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class FlightType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      airLine: '',
      direct: ''
    };
    this.onChangeAireLine = this.onChangeAireLine.bind(this);
    this.onChangeDirect = this.onChangeDirect.bind(this);
  }
  onChangeAireLine(newText) {
    this.setState({
      airLine: newText
    });
  }
  onChangeDirect(newText) {
    this.setState({
      direct: newText
    });
  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.airLine}>
          <Icon name="ios-plane" color="blue" size={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeAireLine}
            value={this.state.airLine}
            placeholder="Preferd AirLine"
            placeholderTextColor="blue"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.direct}>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeDirect}
            value={this.state.direct}
            placeholder="Direct Flight"
            placeholderTextColor="blue"
            underlineColorAndroid="transparent"
          />
        </View>
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
    flexDirection: 'row',
    flex: 40,
    height: 40,
    margin: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: 'blue',
    borderWidth: 1
  },
  direct: {
    flexDirection: 'row',
    flex: 40,
    height: 40,
    margin: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: 'blue',
    borderWidth: 1
  },
  input: {
    flex: 0.9
  }
});
