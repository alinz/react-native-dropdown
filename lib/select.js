import React, { Component, } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';
import PropTypes from 'prop-types'

import Option from './option'

const window = Dimensions.get('window');

const SELECT = 'SELECT';

const styles = StyleSheet.create({
  container: {
    borderColor: '#BDBDC1',
    borderWidth: 2 / window.scale
  }
});

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.pageX = 0;
    this.pageY = 0;

    let defaultValue = props.defaultValue || this.getDefaultValue();

    this.state = {
      defaultValue: defaultValue,
      value: props.placeholder 
        ? props.value
        : defaultValue,
      placeholder: props.placeholder
    }
  }

  getDefaultValue = () => {
    const { children } = this.props
    if (Array.isArray(children) ) {
      if (children[0]) {
        return children[0].props.children;
      } else {
        return ''
      }
    } else {
      return children.props.children;
    }
  }

  checkCildrenProps = (props, nextProps) => {
    if (props.children != nextProps.children) {
      if (nextProps.children && nextProps.children.length) {
        const childrenArray = React.Children.toArray(nextProps.children)
        const findValueInData = childrenArray && childrenArray.find(child => child.props && child.props.children == this.state.value)
        if (!findValueInData) this.setState({
          value: nextProps.placeholder
            ? ''
            : this.state.defaultValue
        })
      } else {
        this.setState({
          value:
            nextProps.placeholder
              ? this.state.value
              : this.state.defaultValue
        })
      }
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.value != nextProps.value) {

      this.setState({
        value: nextProps.value != undefined
          ? nextProps.value
          : nextProps.placeholder
            ? ''
            : this.state.defaultValue
      }, () => this.checkCildrenProps(this.props, nextProps))
    } else {
      this.checkCildrenProps(this.props, nextProps)
    }
  }

  reset() {
    const { placeholder } = this.props;
    this.setState({
      value: props.placeholder 
        ? ''
        : this.state.defaultValue
    });
  }

  _currentPosition(pageX, pageY) {
    const { height } = this.props
    this.pageX = pageX;
    this.pageY = pageY + height;
  }

  show() {
    this._onPress()
  }

  _onPress() {
    const { optionListRef, children, onSelect, width, height, optionListExtraWidth, optionListLeftOffset, optionListTopOffset, optionListProps } = this.props;
    const { topOffset = 0, leftOffset = 0, extraWidth = 0 } = optionListProps
    if (!(children && children.length)) {
      return false;
    }
    optionListRef()._show(children, this.pageX + leftOffset, this.pageY + topOffset, width + extraWidth, height, (item, value=item) => {
      if (item) {
        this.setState({
          value: item
        }, () => onSelect(value));
      }
    }, optionListProps);
  }

  render() {
    const { width, height, children, defaultValue, style, styleOption, styleText, placeholder } = this.props;
    const dimensions = { width, height };
  
    return (
      <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
        <View ref={SELECT} style={[styles.container, style, dimensions, {height: '100%'} ]}>
          <Option style={styleOption} styleText={styleText} >{this.state.value || placeholder}</Option>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Select.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  optionListRef: PropTypes.func.isRequired,
  onSelect: PropTypes.func,
  optionListProps: PropTypes.object
};

Select.defaultProps = {
  width: 200,
  height: 40,
  onSelect: () => { },
  optionListProps: {}
};

