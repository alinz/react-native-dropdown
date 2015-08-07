var React = require('react-native');

var {
  StyleSheet,
  Component,
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  NativeModules: {
    UIManager
  }
} = React;

var window = require('Dimensions').get('window');

var topSpace = 4;

var arrow = {
  uri: 'data:image/png;base64,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',
  isStatic: true,
  width: 15,
  height: 15
};

var styles = StyleSheet.create({
  container: {
    height: 40,
    borderColor: '#BDBDC1',
    borderWidth: 2/2
  },
  select: {
    position: 'absolute',
    height: 100,
    width: 355,
    borderColor: '#BDBDC1',
    borderWidth: 2/2,
    left: -1,
    top: 41
  }
});

class Select extends Component {
  constructor(props) {
    super(props);
  }

  _openSelect() {
    var selectDisplay = this.refs['select_display'];
    var handle = React.findNodeHandle(selectDisplay);
    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      console.log(width, height);
    });

    console.log('open select');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this._openSelect.bind(this)}>
          <View ref="select_display" style={{flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5 }}><Text>Hello</Text></View>
            <View style={{ width: 20, alignItems: 'center' }}><Image source={arrow}/></View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.select}></View>
      </View>
    );
  }
}

module.exports = Select;
