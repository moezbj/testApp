import React, { Component } from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      name: '',
      onChange: null
    };
  }
  render() {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => {
          this.toggleCheck();
        }}
        style={styles.check}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          {this.state.checked && <Icon name="check" size={20 - 5} color="blue" />}
        </View>
      </TouchableHighlight>
    );
  }
  toggleCheck() {
    const checked = !this.state.checked;
    this.setState({ checked });
    this.props.onChange && this.props.onChange(this.props.name, checked);
  }
}
const styles = StyleSheet.create({
  check: {
    backgroundColor: '#fff',
    borderColor: 'blue',
    borderRadius: 6,
    borderWidth: 2,
    height: 20,
    margin: 2,
    width: 20
  }
});
