import React, { Component, } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import Items from './items'
import Overlay from './overlay'

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: window.width
  }
});

export default class OptionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      width: 0,
      height: 0,
      pageX: 0,
      pageY: 0,
      positionX: 0,
      positionY: 0,
      items: [],
      onSelect: () => { }
    };
  }

  _currentPosition(pageX, pageY) {
    this.setState({
      ...this.state,
      pageX,
      pageY
    });
  }

  _show(items, positionX, positionY, width, height, onSelect, optionListProps) {
    positionX = positionX - this.state.pageX;
    positionY = positionY - this.state.pageY;

    this.setState({
      ...this.state,
      positionX,
      positionY,
      width,
      height,
      items,
      onSelect,
      optionListProps,
      show: true
    });
  }

  _onOverlayPress() {
    const { onSelect } = this.state;
    onSelect(null, null);

    this.setState({
      ...this.state,
      show: false
    });
  }

  _onItemPress(item, value) {
    const { onSelect } = this.state;
    onSelect(item, value);

    this.setState({
      ...this.state,
      show: false
    });
  }

  render() {
    const { customScrollViewComp } = this.props
    const { items, pageX, pageY, positionX, positionY, width, height, show, optionListProps } = this.state;

    if (!show) return null
    return (
      <View style={styles.wrapper}>
        <Overlay
          pageX={pageX}
          pageY={pageY}
          show={show}
          onPress={ this._onOverlayPress.bind(this) }/>
        <Items
          autoHeightItemsList={optionListProps && optionListProps.autoHeightItemsList}
          items={items}
          positionX={positionX}
          positionY={positionY}
          width={width}
          height={height}
          show={show}
          customScrollViewComp={customScrollViewComp}
          onPress={ this._onItemPress.bind(this) }/>
      </View>
    );
  }
}


