import React from 'react';
import { View, StyleSheet, Button, Text, Image, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Icon from 'react-native-vector-icons/Entypo';

import NavBar from './NavBar';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.img}>
          <SvgUri width="60" height="60" source={require('../images/Logo.svg')} />
        </View>
        <View style={styles.centerFlex} />
        <View style={styles.nav}>
          <TouchableOpacity
            style={[styles.btn, this.props.color ? { backgroundColor: 'orange' } : {}]}
            underlayColor={'orange'}
            onPress={this.props.show}
          >
            <Icon name="menu" color="white" size={20} />
          </TouchableOpacity>
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
  centerFlex: {
    flex: 1
  },
  nav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    height: 40,
    width: 40,
    backgroundColor: '#253748',
    borderRadius: 6,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
