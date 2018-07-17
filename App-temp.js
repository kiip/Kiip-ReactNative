/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, Button, View} from 'react-native';

var KiipBridge = require('NativeModules').KiipBridge;
var KiipBridge2 = require('NativeModules').KiipSDK;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      moment: ''
    }
    if (Platform.OS === "ios") {
      KiipBridge.kiipInit('3b46e5f42299f1697193bb843ed8dbf4', '90c4f68ebb4817b3edf24799b04df22c');
    } else if (Platform.OS === "android") {
      KiipBridge2.kiipInit('3b46e5f42299f1697193bb843ed8dbf4', '90c4f68ebb4817b3edf24799b04df22c');
    }

  }

  squareMe(num) {
    if(num == '') {
      return;
    }
    KiipBridge.squareMe(num, (error, result) => {
      if (error) {
        console.error(error);
      } else {
        this.setState({number: result});
      }
    })
  }

  onEditText(word) {
    this.setState({moment: word});
    console.log('Editing Text...');
  }


  _handlePress() {
    if (Platform.OS === "android") {
      KiipBridge2.save_moment(this.state.moment);
    } else if (Platform.OS === "ios") {
      KiipBridge.kiipSaveMoment(this.state.moment);
    }
  }

  render() {
    if (Platform.OS === "android") {
      return (
        <View style={styles.container}>
        <Text style={styles.welcome}>'Welcome Android'</Text>
        <TextInput
          placeholder = "moment id"
          style = {styles.input_moment}
          onChangeText={(text) => this.onEditText(text)}
        />
        <Button
          onPress={() => this._handlePress()}
          title="Save Moment"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        </View>
      );
    } else {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Enter Text"/>
        <Text style={styles.welcome}>{KiipBridge.greeting}</Text>


        <TextInput
          placeholder="Enter Text"
          style={styles.input}
          onChangeText={(text) => this.squareMe(text)}
        />
        <Text style={styles.result}>
          {this.state.number}
        </Text>


        <Text style={styles.instructions}>
        To get started, enter your moment id
        </Text>
        <TextInput
          placeholder = "moment id"
          style = {styles.input_moment}
          onChangeText={(text) => this.onEditText(text)}
        />
        <Button
          onPress={() => this._handlePress()}
          title="Save Moment"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Text style={styles.instructions}>{instructions}</Text>

      </View>
    );
  }
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    width: 100,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'center',
  },
  result: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
  input_moment: {
    width: 100,
    textAlign: 'center',
    color: '#666666',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
});
