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
          style={styles.datePicker}
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51868a'
  },
  DatePicker: {
    opacity: 0
  }
});
