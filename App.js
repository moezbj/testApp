import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  KeyboardAvoidingView,
  ImageBackground,
  Animated,
  Image,
  Easing
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
      flightDateReturn: '',
      isClicked: false
    };
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.animatedValue = new Animated.Value(0);
  }
  show = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      color: !this.state.color
    });
    this.animate();
  };
  close() {
    this.setState({
      isVisible: false
    });
  }
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
  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear
    }).start();
  }

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [width * 2, width]
    });
    const marginRight = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [width / 2, width * 2]
    });
    return (
      <TouchableWithoutFeedback onPress={this.close}>
        <View style={styles.container}>
          <ImageBackground source={require('./src/images/bg.jpg')} style={styles.backgroundImage}>
            <ScrollView>
              <KeyboardAvoidingView behavior="padding">
                <View style={styles.main}>
                  <Header show={this.show} color={this.state.color} />
                  <ButtonsMenu style={styles.btn} />
                  <Form
                    style={styles.input}
                    onPressDate={this.onPressDate}
                    flightDate={this.state.flightDate}
                    flightDateReturn={this.state.flightDateReturn}
                    isClicked={this.state.isClicked}
                  />
                  <ClassType style={styles.class} />
                  <Extra style={styles.extra} />
                  <FlightType />
                  <Search style={styles.search} />
                  <PaymentLogo />
                </View>
                <View style={styles.anim}>
                  {this.state.isVisible && (
                    <Animated.View style={this.state.isVisible ? { marginLeft } : { marginRight }}>
                      <NavBar />
                    </Animated.View>
                  )}
                </View>
                <View>
                  <DatePicker
                    style={{ position: 'absolute', bottom: -200 }}
                    ref={ref => (this.datePicker = ref)}
                    date={this.state.date}
                    mode="date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    hideText
                    onDateChange={this.onDateChange}
                  />
                </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    width,
    height
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  anim: {
    flex: 1,
    height: height / 2 - 60,
    position: 'absolute'
  }
});
