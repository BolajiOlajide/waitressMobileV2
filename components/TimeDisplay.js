import React from 'react';
import { Text, StyleSheet } from 'react-native';


function TimeDisplay({ currentTime }) {
  return <Text style={styles.timeDisplay}>{currentTime}</Text>
}

const styles = StyleSheet.create({
  timeDisplay: {
    color: '#000',
    fontSize: 60
  }
})

export default TimeDisplay;
