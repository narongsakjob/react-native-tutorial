import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	View,
  Platform,
  Button,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btn_bar}>
          <Button title="title1"/>
          <Button title="title2"/>
          <Button title="title3"/>
          <Button title="title4"/>          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: 'pink',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'column',
		paddingTop: Platform.OS === "ios" ? 25 : 0,
  },
  btn_bar: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',

  }
});