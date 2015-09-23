const React = require('react-native');

const {
  Dimensions,
  StyleSheet,
  Component,
  View,
  ScrollView,
  TouchableWithoutFeedback
} = React;

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {

    height: 120,
    width: 198
  },
  container: {
    position: 'absolute',
    borderColor: '#BDBDC1',
    borderWidth: 2 / window.scale,
    borderTopColor: 'transparent',
  }
})

class Items extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, positionX, positionY, show, onPress } = this.props;

    if (!show) {
      return null;
    }

    const renderedItems = React.Children.map(items, (item) => {
      console.log(item);
      return (
        <TouchableWithoutFeedback onPress={() => console.log("item.props.children") }>
        {item}
        </TouchableWithoutFeedback>
      );
    });

    console.log(renderedItems);

    return (
      <View style={[styles.container, { top: positionY, left: positionX }]}>
        <ScrollView
          style={styles.scrollView}
          automaticallyAdjustContentInsets={false}
          bounces={false}>
          {renderedItems}
        </ScrollView>
      </View>
    );
  }
}

Items.propTypes = {
  positionX: React.PropTypes.number,
  positionY: React.PropTypes.number,
  show: React.PropTypes.bool,
  onPress: React.PropTypes.func
};

Items.defaultProps = {
  positionX: 0,
  positionY: 0,
  show: false,
  onPress: () => {}
};

module.exports = Items;
