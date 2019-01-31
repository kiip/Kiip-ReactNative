import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'

import KiipNativeRewardView from '../Kiip/KiipNativeRewardView';

export default class NativeDemo extends Component {

  constructor(props){
    super(props)
    this.state = {
      moment: ''   //place the native reward moment id
    }
  }

  componentWillUnmount(){
  }

  render(){
    const working = <Text style={styles.h2text}> Ad will display shortly! </Text>;
    const not_working = <Text style={styles.h2text}> Please edit the moment id from constructor! </Text>;
    let message;
    if (this.state.moment != '') {
        message = working
    } else {
        message = not_working
    }
    return (
      <View style={styles.container}>
      {/*Kiip Native View's size is recommended to be 250x300 and make sure to include the moment id*/}
      <KiipNativeRewardView style={styles.nativeView} moment={this.state.moment} />
      <View>{message}</View>

      </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "5%",
    justifyContent: "center",
    alignItems: "center"
  },
  h2text: {
    fontFamily: 'Helvetica',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: '-10%',
    marginBottom: '5%',
    textAlign: "center"
  },
  nativeView: {
      marginBottom: '10%',
      height: 250,
      width: 300,
    },
});
