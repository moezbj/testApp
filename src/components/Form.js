import React, { Component } from 'react';
import { AppRegistry, TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import SvgUri from 'react-native-svg-uri';
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FylingFrom: '',
      FylingTo: ''
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

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeFrom}
          value={this.state.FylingFrom}
          placeholder="Flying From"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={styles.input}
          onChangeText={this.onChangeTo}
          value={this.state.FylingTo}
          placeholder="Flying to"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />

        <View style={styles.date}>
          <TouchableOpacity style={styles.depart} onPress={() => this.datePicker.onPressDate()}>
            <DatePicker
              ref={ref => (this.datePicker = ref)}
              style={styles.datePicker}
              date={this.state.date}
              mode="date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              hideText
              onDateChange={this.onDateChange}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.return} onPress={() => this.datePicker.onPressDate()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    height: 40
  },
  return: {
    flex: 40,
    backgroundColor: '#085373',
    margin: 5,
    height: 40
  },
  DatePicker: {
    opacity: 0,
    width: 0
  }
});
