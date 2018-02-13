import React from 'react';
import { Text, View, Content, StyleSheet, ScrollView } from 'react-native';
import Header from './src/components/Header';
import ButtonsMenu from './src/components/ButtonsMenu';
import Form from './src/components/Form';
import ClassType from './src/components/ClassType';
import Extra from './src/components/Extra';
import Search from './src/components/Search';
import FlightType from './src/components/FlightType';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <ButtonsMenu style={styles.btn} />
        <Form style={styles.input} />
        <ClassType style={styles.class} />
        <Extra style={styles.extra} />
        <FlightType />

        <Search style={styles.search} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51868a'
  },
  btn: {
    padding: 5
  },
  input: {
    padding: 5
  },
  class: {
    padding: 5
  },
  extra: {
    padding: 5
  },
  search: {
    padding: 5
  }
});
