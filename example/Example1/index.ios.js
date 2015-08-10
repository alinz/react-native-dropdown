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

var Select = require('react-native-dropdown');

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

    const options = [
      {
        label: 'News'
      },
      {
        label: 'Design'
      },
      {
        label: 'Sales'
      },
      {
        label: 'Marketing'
      },
      {
        label: 'Customer Success'
      }
    ];

    return (
      <View style={ styles.container }>
        <Select
          options={options}
          defaultOption={4}
          onSelect={(index) => { console.log(index, 'is selected.'); }}/>
      </View>
    );
  }
}


AppRegistry.registerComponent('Example1', () => Example1);
