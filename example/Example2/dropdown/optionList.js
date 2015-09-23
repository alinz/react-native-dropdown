const React = require('react-native');
const Overlay = require('./overlay');
const Items = require('./items');

const {
  Dimensions,
  StyleSheet,
  Component,
  View
} = React;

const window = Dimensions.get('window');

class OptionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      
      pageX: 0,
      pageY: 0,

      positionX: 0,
      positionY: 0,

      items: []
    };
  }

  _currentPosition(pageX, pageY) {
    this.setState({
      ...this.state,
      pageX,
      pageY
    });
  }

  _show(items, positionX, positionY) {
    positionX = positionX - this.state.pageX;
    positionY = positionY - this.state.pageY;

    this.setState({
      ...this.state,
      positionX,
      positionY,
      items,
      show: true
    });
  }

  render() {
    const { pageX, pageY, positionX, positionY, show } = this.state;

    return (
      <View>
        <Overlay pageX={pageX} pageY={pageY} show={show}/>
        <Items positionX={positionX} positionY={positionY} show={show}/>
      </View>
    );
  }
}

OptionList.propTypes = {

};

OptionList.defaultProps = {

};

module.exports = OptionList;
