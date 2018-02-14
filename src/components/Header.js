import React from 'react';
import { View, StyleSheet, Button, Text, Image, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import NavBar from './NavBar';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.img}>
          <SvgUri width="60" height="60" source={require('../images/Logo.svg')} />
        </View>
        <View style={styles.centerFlex} />
        <View style={styles.nav}>
          <TouchableOpacity style={styles.btn} onPress={this.props.show} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    backgroundColor: '#253748',
    justifyContent: 'space-around'
  },
  img: {
    alignItems: 'flex-start',
    flex: 1
  },
  nav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 60
  },
  btn: {
    alignItems: 'center',
    height: 20,
    width: 20,
    backgroundColor: 'red'
  },
  centerFlex: {
    flex: 1
  }
});
