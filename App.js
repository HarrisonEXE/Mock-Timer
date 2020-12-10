import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Timer from './Components/Timer';
import Log from './Components/Logs';
import FancyLog from './Components/FancyLog';
import { StyleSheet, Text, View } from 'react-native';
import Example from './Components/Example';

export default function App() {
  return (
    <View style={styles.container}>
      {/* SETTINGS BUTTON */}

      {/* TIMERS */}
      <View style={styles.timerRow}>
        <Timer />
        <Timer />
      </View>

      {/* LOG */}
      <Log />

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
  }
});
