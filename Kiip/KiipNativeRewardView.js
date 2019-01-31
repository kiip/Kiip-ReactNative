

import { PropTypes } from 'prop-types';
import { NativeModules, requireNativeComponent, View } from 'react-native';

var iface = {
  name: 'KiipNativeRewardView',
  PropTypes: {
    moment: 'PropTypes.string',
    ...View.propTypes // include the default view properties
  },
};
module.exports = requireNativeComponent('KiipNativeRewardView', iface);
