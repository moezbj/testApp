import React from 'react';
import { Text, View, Content, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class Extra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(newText) {
    this.setState({
      text: newText
    });
  }
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.btn}>
          <TextInput
            style={styles.input}
            onChangeText={this.onChange}
            value={this.state.text}
            placeholder="Adulte 1,Child 0"
            placeholderTextColor="white"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#085373',
    height: 40,
    margin: 5
  }
});
