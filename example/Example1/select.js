var React = require('react-native');

var {
  StyleSheet,
  Component,
  View,
  Text,
  ScrollView
} = React;

var window = require('Dimensions').get('window');

var styles = StyleSheet.create({
  container: {
    height: 40,
    borderColor: '#B2B1B7',
    borderWidth: 1/2
  }
});

class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5 }}><Text>Hello</Text></View>
          <View style={{ width: 20, alignItems: 'center' }}><Text>^</Text></View>
        </View>
      </View>
    );
  }
}

module.exports = Select;
