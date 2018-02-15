import React, { Component } from 'react';
import { AppRegistry, TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import SvgUri from 'react-native-svg-uri';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FylingFrom: '',
      FylingTo: '',
      departureDate: 'Departure Date',
      returnDate: 'Return Date',
      id1: 1,
      id2: 0
    };
    this.onChangeTo = this.onChangeTo.bind(this);
    this.onChangeFrom = this.onChangeFrom.bind(this);
  }
  onChangeFrom(newText) {
    this.setState({
      FylingFrom: newText
    });
  }
  onChangeTo(newText) {
    this.setState({
      FylingTo: newText
    });
  }
  componentWillReceiveProps = nextProps => {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInput}>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeFrom}
            value={this.state.FylingFrom}
            placeholder="Flying From"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
          <Icon name="plane" color="white" size={20} />
        </View>

        <View style={styles.textInput}>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeTo}
            value={this.state.FylingTo}
            placeholder="Flying to"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
          <Icon name="plane" color="white" size={20} style={styles.icon} />
        </View>

        <View style={styles.date}>
          <TouchableOpacity
            style={styles.depart}
            onPress={() => this.props.onPressDate(this.state.id1, this.props.isClicked)}
          >
            <Text style={styles.textmenu}>
              {this.props.flightDate.length > 0 ? this.props.flightDate : this.state.departureDate}
            </Text>
            <Icon name="calendar" color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.return}
            onPress={() => this.props.onPressDate(this.state.id2)}
          >
            <Text style={styles.textmenu}>
              {this.props.flightDateReturn.length > 0
                ? this.props.flightDateReturn
                : this.state.returnDate}
            </Text>
            <Icon name="calendar" color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: '#085373',
    flex: 0.9
  },
  textmenu: {
    fontSize: 16,
    color: 'white',
    flex: 0.9
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  depart: {
    flexDirection: 'row',
    flex: 40,
    backgroundColor: '#085373',
    margin: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#085373'
  },
  return: {
    flexDirection: 'row',
    flex: 40,
    backgroundColor: '#085373',
    margin: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#085373'
  },
  textInput: {
    backgroundColor: '#085373',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#085373'
  },
  icon: {
    transform: [{ rotate: '180deg' }]
  }
});
