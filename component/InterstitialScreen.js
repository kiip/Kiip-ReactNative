import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native'

import { NativeModules, NativeEventEmitter } from 'react-native'

import Interstitial from '../Kiip/Interstitial'

export default class InterstitialsDemo extends Component {
  constructor(props){
    super(props)
    this.state = {
      log: "Ready to load ads",
      moment: ''
    }
  }

  componentWillUnmount(){
    this.listener.remove()
  }

  log = new NativeEventEmitter(NativeModules.KiipInterstitial)
  listener = this.log.addListener('log', (data) => {
      console.log("Log:", data)
      this.setState({
        log: data
      })
  })



  onEditText(word) {
    this.setState({moment: word});
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.h2text}>
          {this.state.log}
        </Text>
        <TextInput
          placeholder = "Enter Moment ID"
          style = {styles.input_moment}
          onChangeText={(text) => this.onEditText(text)}
        />
        <TouchableOpacity
          onPress={()=>Interstitial.moment(this.state.moment)}
        >
        <Text style={styles.h3text}>Save Moment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>Interstitial.show()}
        >
        <Text style={styles.h3text}>Show Ad</Text>
        </TouchableOpacity>
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
    textAlign: "center",
    color: '#34495E'
  },
  h3text: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
    color: '#FA1848'
  },
  input_moment: {
    height: 60,
    width: 250,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#666666',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
});
