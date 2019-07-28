import React, { Fragment } from 'react';
import { Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  entryText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#000'
  }
});

export default LandingInfo = ({ isTimeBeforeMidday }) => (
  <Fragment>
    <Text style={styles.entryText}>
      It's time for {isTimeBeforeMidday ? 'Breakfast' : 'Lunch'}
    </Text>
  </Fragment>
);
