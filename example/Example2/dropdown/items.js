const React = require('react-native');

const {
  Dimensions,
  StyleSheet,
  Component,
  ScrollView
} = React;

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderColor: '#BDBDC1',
    borderWidth: 2 / window.scale,
    height: 120,
    width: 200
  }
})

class Items extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { positionX, positionY, show } = this.props;

    if (!show) {
      return null;
    }

    return (
      <ScrollView
        style={[styles.container, { top: positionY, left: positionX }]}
        automaticallyAdjustContentInsets={false}
        bounces={false}>
      </ScrollView>
    );
  }
}

Items.propTypes = {
  positionX: React.PropTypes.number,
  positionY: React.PropTypes.number,
  show: React.PropTypes.bool
};

Items.defaultProps = {
  positionX: 0,
  positionY: 0,
  show: false
};

module.exports = Items;
