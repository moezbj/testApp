import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import SvgUri from 'react-native-svg-uri';

const { width, height } = Dimensions.get('window');

export default class NavBar extends React.Component {
  render() {
    console.log(width, height);
    return (
      <View style={styles.container}>
        <View style={styles.country}>
          <Text style={styles.currencyText}>Currency</Text>
          <TouchableOpacity style={styles.kwd}>
            <SvgUri width="30" height="30" source={require('../images/flag.svg')} />
            <Text style={styles.textkwd}>KWD</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.lang}>
            <Text style={styles.text}>عربي</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textmenu}>Flight</Text>
          <Text style={styles.textmenu}>Hotel</Text>
          <Text style={styles.textmenu}>Services</Text>
          <Text style={styles.textmenu}>My Booking</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#085373',
    position: 'absolute',
    top: 62,
    right: 0,
    width: width / 2,
    height: height / 2 - 60
  },
  country: {
    flexDirection: 'row',
    marginBottom: 18,
    paddingLeft: 10
  },
  kwd: {
    backgroundColor: '#1476a1',
    flexDirection: 'row',
    height: 30,
    borderRadius: 5,
    marginLeft: 10
  },
  textkwd: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16
  },
  lang: {
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    marginLeft: 16,
    marginBottom: 10
  },
  text: {
    backgroundColor: '#0675a3',
    padding: 7,
    borderRadius: 5,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  textmenu: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 16,
    marginBottom: 8
  },
  currencyText: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 10
  }
});
