/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  View,
} = React;

var Select = require('./select');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  }
});

class Example1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={ styles.container }>
        <Select/>
      </View>
    );
  }
}


AppRegistry.registerComponent('Example1', () => Example1);
