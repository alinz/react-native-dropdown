const React = require('react-native');
const Option = require('./option');

const {
  Dimensions,
  StyleSheet,
  Component,
  TouchableWithoutFeedback,
  View
} = React;

const window = Dimensions.get('window');

const SELECT = 'SELECT';

const styles = StyleSheet.create({
  container: {
    borderColor: '#BDBDC1',
    borderWidth: 2 / window.scale
  }
});

class Select extends Component {
  constructor(props) {
    super(props);

    this.pageX = 0;
    this.pageY = 0;
  }

  _currentPosition(pageX, pageY) {
    this.pageX = pageX;
    this.pageY = pageY + 40;
  }

  _onPress() {
    const { optionListRef, children } = this.props;
    optionListRef()._show(children, this.pageX, this.pageY);
  }

  render() {
    const { width, height } = this.props;
    const selectStyle = { width, height };

    return (
      <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
        <View ref={SELECT} style={[styles.container, selectStyle]}>
          <Option>Hello</Option>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Select.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  optionListRef: React.PropTypes.func.isRequired,
  onSelect: React.PropTypes.func
};

Select.defaultProps = {
  width: 200,
  height: 40,
  onSelect: () => { }
};

module.exports = Select;
