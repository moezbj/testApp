import React from 'react';
import { Text, View, Content, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import ButtonsMenu from './src/components/ButtonsMenu';
import Form from './src/components/Form';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ButtonsMenu style={styles.btn} />
        <Form style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51868a'
  },
  btn: {
    margin: 30
  },
  input: {
    padding: 5
  }
});
