const React = require('react-native');

const {
  Dimensions,
  StyleSheet,
  Component,
  TouchableWithoutFeedback,
  View
} = React;

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: window.width,
    height: window.height
  }
});

class Overlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pageX, pageY, show, onPress } = this.props;

    if (!show) {
      return null
    }

    return (
      <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
        <View style={[styles.overlay, { top: -pageY, left: -pageX }]}/>
      </TouchableWithoutFeedback>
    );
  }
}

Overlay.propTypes = {
  pageX: React.PropTypes.number,
  pageY: React.PropTypes.number,
  show: React.PropTypes.bool
};

Overlay.defaultProps = {
  pageX: 0,
  pageY: 0,
  show: false
};

module.exports = Overlay;
