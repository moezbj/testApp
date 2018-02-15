import React from 'react';
import {
  Text,
  View,
  Content,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';

const { width, height } = Dimensions.get('window');

import DatePicker from 'react-native-datepicker';
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
      isVisible: false,
      color: false,
      flightDate: '',
      flightDateReturn: ''
    };
  }
  show = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      color: !this.state.color
    });
  };

  onPressDate = (id1, id2) => {
    this.datePicker.onPressDate();
    this.setState({
      id1,
      id2
    });
  };

  onDateChange = newdate => {
    if (this.state.id1 == 1) {
      this.setState({
        flightDate: newdate
      });
    } else {
      this.setState({
        flightDateReturn: newdate
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.main}>
            <Header show={this.show} color={this.state.color} />
            <ButtonsMenu style={styles.btn} />
            <Form
              style={styles.input}
              onPressDate={this.onPressDate}
              flightDate={this.state.flightDate}
              flightDateReturn={this.state.flightDateReturn}
            />
            <ClassType style={styles.class} />
            <Extra style={styles.extra} />
            <FlightType />
            <Search style={styles.search} />
            <PaymentLogo />
          </View>
          {this.state.isVisible && <NavBar />}
          <View>
            <DatePicker
              ref={ref => (this.datePicker = ref)}
              date={this.state.date}
              mode="date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon
              onDateChange={this.onDateChange}
            />
          </View>
        </KeyboardAvoidingView>
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
  },
  main: {
    width,
    height
  }
});
