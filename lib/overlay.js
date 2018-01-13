import React, { Component, } from 'react';
import PropTypes from 'prop-types'
import { Dimensions, StyleSheet, View, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%'
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: window.width,
    height: '100%'
  }
});

export default class Overlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pageX, pageY, show, onPress } = this.props;
    return (
      <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
        <View style={[styles.overlay, { top: -pageY, left: -pageX, height: '100%' }]}/>
      </TouchableWithoutFeedback>
    );
  }
}

Overlay.propTypes = {
  pageX: PropTypes.number,
  pageY: PropTypes.number,
  show: PropTypes.bool
};

Overlay.defaultProps = {
  pageX: 0,
  pageY: 0,
  show: false
};

