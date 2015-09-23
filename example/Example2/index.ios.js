/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var React = require('react-native');
var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

const DropDown = require('./dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

class Example2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['SELECT2']);

    updatePosition(this.refs['OPTIONLIST']);
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select ref="SELECT1" optionListRef={this._getOptionList.bind(this)}>
            <Option>Hello1</Option>
            <Option>Hello2</Option>
            <Option>Hello3</Option>
            <Option>Hello4</Option>
            <Option>Hello5</Option>
            <Option>Hello6</Option>
          </Select>

          <View style={{ height: 10 }}/>

          <Select ref="SELECT2" optionListRef={this._getOptionList.bind(this)}>
            <Option>Hello1</Option>
          </Select>

          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>

          <OptionList ref="OPTIONLIST"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Example2', () => Example2);
