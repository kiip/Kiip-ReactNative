import { createStackNavigator } from 'react-navigation';

import MainScreen from './component/MainScreen'
import InterstitialsDemo from './component/InterstitialScreen'
import NativeDemo from './component/NativeScreen'


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
    },
    Native: {
      screen: NativeDemo,
      navigationOptions: {
        title: 'Native'
      }
    }

})
