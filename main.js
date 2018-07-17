import { createStackNavigator } from 'react-navigation';

import MainScreen from './component/MainScreen'
import InterstitialsDemo from './component/InterstitialScreen'


export default Main = createStackNavigator({
    Home: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Kiip'
      }
    },
    Interstitial: {
      screen: InterstitialsDemo,
      navigationOptions: {
        title: 'Interstitial'
      }
    }

})
