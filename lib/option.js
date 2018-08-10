import React, { Component, } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  }
});

export default class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, styleText } = this.props;

    return (
      <View style={[ styles.container, style ]}>
        <Text style={ styleText }>{this.props.children}</Text>
      </View>
    );
  }
}

Option.propTypes = {
  children: PropTypes.string.isRequired
};

