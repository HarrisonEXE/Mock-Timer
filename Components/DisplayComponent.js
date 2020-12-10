import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

function DisplayComponent(props) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to sdsstart working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    fontSize: 60,
    textAlign: 'center',
    height: 60,
    margin: 10,
  },
  miniCounter: {
      fontSize:20,
      position: 'relative',
      top: -32,
      right: -50
  }
});

export default DisplayComponent;
