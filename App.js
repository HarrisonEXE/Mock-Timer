import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Timer from './Components/Timer';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.timerRow}>
        <Timer />
        <Timer />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerRow: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
  }
});
