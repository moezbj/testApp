import React from 'react';
import { Text, View, Content, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import ButtonsMenu from './src/components/ButtonsMenu';
import Form from './src/components/Form';
import ClassType from './src/components/ClassType';
import Extra from './src/components/Extra';
import Search from './src/components/Search';
import FlightType from './src/components/FlightType';
import PaymentLogo from './src/components/PaymentLogo';
import NavBar from './src/components/NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  show = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header show={this.show} />
          <ButtonsMenu style={styles.btn} />
          <Form style={styles.input} />
          <ClassType style={styles.class} />
          <Extra style={styles.extra} />
          <FlightType />
          <Search style={styles.search} />
          <PaymentLogo />
        </ScrollView>
        {this.state.isVisible && <NavBar />}
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
