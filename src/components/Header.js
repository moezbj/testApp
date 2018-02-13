import React from 'react';
import { View, StyleSheet, Button, Text, Icon, Image, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
export default class Header extends React.Component {
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
      <View style={styles.mainView}>
        <View style={styles.img}>
          <SvgUri width="60" height="60" source={require('../images/Logo.svg')} />
        </View>
        <View style={styles.centerFlex} />
        <TouchableOpacity style={styles.btn} onPress={() => this.show()}>
          {this.state.isVisible && <navBar style={styles.nav} />}
        </TouchableOpacity>
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
  btn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#253748',
    height: 30
  },

  centerFlex: {
    flex: 1
  }
});
