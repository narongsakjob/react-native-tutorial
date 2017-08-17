import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	View,
	Platform
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }}/>
        <View style={{ width: 50, height: 50, backgroundColor: "red" }}/>
        <View style={{ width: 50, height: 50, backgroundColor: "green" }}/>
        <View style={{ width: 50, height: 50, backgroundColor: "yellow" }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
		paddingTop: Platform.OS === "ios" ? 25 : 0,
  }
});