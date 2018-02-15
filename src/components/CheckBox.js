import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '#FFF',
      borderRadius: 0,
      borderWidth: 2,
      checked: false,
      color: '#000',
      margin: 2,
      name: '',
      onChange: null,

      borderColor: '#000'
    };
  }

  render() {
    BORDER_RADIUS = this.state.borderRadius;
    BORDER_WIDTH = this.state.borderWidth;
    COLOR = this.state.color;
    MARGIN = this.state.margin;
    BORDER_COLOR = this.state.borderColor;
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => {
          this._toggleCheck();
        }}
        style={{
          backgroundColor: '#fff',
          borderColor: BORDER_COLOR,
          borderRadius: BORDER_RADIUS,
          borderWidth: BORDER_WIDTH,
          height: 20,
          margin: MARGIN,
          width: 20
        }}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          {this.state.checked && <Icon name="check" size={20 - 5} color={COLOR} />}
        </View>
      </TouchableHighlight>
    );
  }

  _toggleCheck() {
    const checked = !this.state.checked;
    this.setState({ checked });
    this.props.onChange && this.props.onChange(this.props.name, checked);
  }
}

module.exports = Checkbox;
