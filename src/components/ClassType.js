import React from 'react';
import { Text, View, Content, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class ClassType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FylingFrom: ''
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
      <View style={styles.main}>
        <TouchableOpacity style={styles.btn}>
          <TextInput
            style={styles.input}
            onChangeText={this.onChange}
            value={this.state.text}
            placeholder="Economy"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    marginBottom: 15
  },
  btn: {
    backgroundColor: '#085373',
    height: 40,
    margin: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#085373'
  },
  input: {
    color: 'white'
  }
});
