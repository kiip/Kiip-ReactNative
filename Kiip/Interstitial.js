import {NativeModules} from 'react-native'

const saveMoment =  (momentId) => {
  return NativeModules.KiipInterstitial.saveMoment(momentId);
}

const showInterstitial = () => {
  return NativeModules.KiipInterstitial.show();
}

const Interstitial = Object.assign({
  moment: (momentId) => saveMoment(momentId),
  show: showInterstitial
}, NativeModules.Interstitial)

export default Interstitial
