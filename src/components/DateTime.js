import React from 'react';
import { Text, View, Content, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: '2016-05-15' };
  }
  render() {
    return (
      <View>
        <DatePicker
          style={{ width: 200, marginTop: 30 }}
          date={this.state.date}
          mode="date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={this.onDateChange}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51868a'
  }
});
