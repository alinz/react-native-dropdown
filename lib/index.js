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
    borderWidth: 2 / window.scale
  },
  select: {
    position: 'absolute',
    borderColor: '#BDBDC1',
    borderWidth: 2 / window.scale,
    left: -1
  },
  option: {
    padding: 10
  }
});

class DropDown extends Component {
  constructor(props) {
    super(props);

    var selectedValue;
    if (props.options && props.options.length > props.defaultOption) {
      selectedValue = props.defaultOption;
    }

    this.contentOffset = { x: 0, y: 0 };

    this.state = {
      open: false,
      top: 0,
      width: 0,
      selectedValue
    };
  }

  _toggleDropDownMenu() {
    var selectDisplay = this.refs['select_display'];
    var { open } = this.state;
    var handle;

    if (open) {
      this.setState({
        ...this.state,
        open: false
      });
    } else {
      handle = React.findNodeHandle(selectDisplay);
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        this.setState({
          ...this.state,

          open: true,
          top: height,
          width: width + 2
        });
      });
    }
  }

  _onSelect(index) {
    var { options, onSelect } = this.props;
    var option = options[index];
    var { selectedValue } = this.state;

    this.setState({
      ...this.state,
      selectedValue: index,
      open: false
    });

    if (onSelect && selectedValue !== index) {
      onSelect(index);
    }
  }

  renderOption(option) {
    return (
      <View style={styles.option}>
        <Text>{option.label}</Text>
      </View>
    );
  }

  _renderOptions() {
    var { options } = this.props;

    return options.map((option, index) =>
      <TouchableWithoutFeedback
        key={index}
        onPress={this._onSelect.bind(this, index)}>
        {this.renderOption(option)}
      </TouchableWithoutFeedback>
    );
  }

  _onScroll(event) {
    var {
      nativeEvent: {
        contentOffset
      }
    } = event;

    this.contentOffset = { ...contentOffset };
  }

  _renderPopupWindow() {
    var { open, top, width } = this.state;
    var { options, optionHeight, numberOptionsDisplay } = this.props;

    var height = 10;

    if (numberOptionsDisplay <= options.length) {
      height = optionHeight * (numberOptionsDisplay - 1) + optionHeight / 2;
    } else if (options.length > 0) {
      height = optionHeight * options.length;
    }

    return !open? null :
      (
        <View style={[styles.select, { top: top, width: width, height: height }]}>
          <ScrollView
            scrollEventThrottle={1}
            onScroll={this._onScroll.bind(this)}
            contentOffset={this.contentOffset}
            automaticallyAdjustContentInsets={false}
            bounces={false}>
            {this._renderOptions()}
          </ScrollView>
        </View>
      );
  }

  getSelectedItem() {
    const { selectedValue } = this.state;
    return selectedValue;
  }

  render() {
    var { options } = this.props;
    var { selectedValue } = this.state;

    var option = options[selectedValue];

    if (!option) {
      option = {};
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this._toggleDropDownMenu.bind(this)}>
          <View ref="select_display" style={{flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}><Text>{option.label}</Text></View>
            <View style={{ width: 25, alignItems: 'center' }}><Image source={arrow}/></View>
          </View>
        </TouchableWithoutFeedback>
        {this._renderPopupWindow()}
      </View>
    );
  }
}

DropDown.propTypes = {
  defaultOption: React.PropTypes.number,
  options: React.PropTypes.arrayOf(
    React.PropTypes.shape(
      {
        label: React.PropTypes.string.isRequired
      }
    )
  ),
  onSelect: React.PropTypes.func,
  optionHeight: React.PropTypes.number,
  numberOptionsDisplay: React.PropTypes.number
};

DropDown.defaultProps = {
  defaultOption: -1,
  options: [],
  optionHeight: 38,
  numberOptionsDisplay: 3
};

module.exports = DropDown;
