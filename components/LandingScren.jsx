import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen'


class LandingScreen extends Component {
  componentDidMount() {
    // make API call
    SplashScreen.hide();
  }

  render() {
    return (
      <View>
        <Text>Andela Waitress</Text>
      </View>
    )
  }
}
