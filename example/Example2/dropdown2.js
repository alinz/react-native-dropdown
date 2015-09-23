const React = require('react-native');
const {
  Dimensions,
  StyleSheet,
  Component,
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  NativeModules: {
    UIManager
  }
} = React;

const window = Dimensions.get('window');
const SELECT = 'SELECT';
const OPTION_LIST = 'OPTION_LIST';

const styles = StyleSheet.create({
  selectContainer: {
    width: 200,
    height: 40,
    borderColor: '#BDBDC1',
    borderWidth: 2 / window.scale,
    justifyContent: 'center'
  },
  optionContainer: {
    padding: 10
  },
  optionListContainer: {
    position: 'absolute',
    borderColor: '#BDBDC1',
    borderWidth: 2 / window.scale,
    height: 120,
    width: 200
  },
  overlay: {
    backgroundColor: 'gray',
    position: 'absolute',
    height: window.height,
    width: window.width
  }
});

class OptionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      list: [],
      callback: () => {}
    };
  }

  _renderOverlay(enable) {
    let overlay = null;

    const { x, y } = this.state;

    if (enable) {
      overlay = (
        <TouchableWithoutFeedback onPress={() => {
          this.state.callback();
          this.setState({ show: false }); }}>
          <View style={[styles.overlay, { left: -x, top: -y }]}/>
        </TouchableWithoutFeedback>
      );
    }

    return overlay
  }

  _renderItems(enable) {
    const { x, y, w, h, list } = this.state;
    const style = { left: -w / 2, top: -y};

    let rendered = null;

    if (enable) {
      rendered = (
        <ScrollView
          style={[styles.optionListContainer, style]}
          automaticallyAdjustContentInsets={false}
          bounces={false}>
          {list}
        </ScrollView>
      );
    }

    return rendered;
  }

  show(list, x, y, w, h, callback) {
    const handle = React.findNodeHandle(this.refs[OPTION_LIST]);
    UIManager.measure(handle, (x1, y1, width1, height1, pageX1, pageY1) => {
      this.setState({
        show: true,
        list,
        x: x,
        y: pageY1,
        w,
        h,
        callback
      });
    });
  }

  render() {
    const { show } = this.state;
    return (
      <View ref={OPTION_LIST}>
        { this._renderOverlay(show) }
        { this._renderItems(show) }
      </View>
    );
  }
}

OptionList.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  onSelect: React.PropTypes.func,
  Items: React.PropTypes.array
}

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      x: 0,
      y: 0
    };
  }

  _onPress() {
    const { optionListRef, children } = this.props;
    const handle = React.findNodeHandle(this.refs[SELECT]);

    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      const correctX = x + pageX + (pageX? width/2 : 0);
      const correctY = y + pageY + height;

      optionListRef().show(children, correctX, correctY, width, height, (selectedItem) => {
        console.log(selectedItem);
      });
    });
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
          <View ref={SELECT} style={styles.selectContainer}>
            <Option>Hello</Option>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

Select.PropTypes = {
  optionListRef: React.PropTypes.func.isRequired
};

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.optionContainer}>
        <Text>{this.props.children}</Text>
      </View>
    );
  }
}

Select.Option = Option;
Select.OptionList = OptionList;
module.exports = Select;
