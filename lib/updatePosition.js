import ReactNative, { NativeModules } from 'react-native'
const { UIManager } = NativeModules;

module.exports = function (ref, debug) {
  const handle = ReactNative.findNodeHandle(ref);
  if (handle) {
  	setTimeout(() => {
    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      if (debug) {
        console.log(x, y, width, height, pageX, pageY);
      }
      ref._currentPosition(pageX, pageY);
    });
  }, 0);
  }
};
