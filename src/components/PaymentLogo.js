import React from 'react';
import { Text, View, Content, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default class ClassType extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.master}>
          <SvgUri width="60" height="60" source={require('../images/mastercard.svg')} />
        </View>

        <View style={styles.visa}>
          <SvgUri width="60" height="60" source={require('../images/visaelectron.svg')} />
        </View>
        <View style={styles.main} />
        <SvgUri width="60" height="60" source={require('../images/kickstarter.svg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
