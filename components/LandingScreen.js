import React, { Component, Fragment } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// components
import LandingInfo from './LandingInfo';
import TimeDisplay from './TimeDisplay';
import Button from './Button';

// utils
import request from '../utils/request';
import { MEAL_SESSIONS } from '../utils/url';

class LandingScreen extends Component {
  state = {
    isTimeBeforeMidday: false,
    loading: true,
    currentTime: new Date().toLocaleTimeString()
  }

  async componentDidMount() {
    let response;

    try {
      response = await request.get(MEAL_SESSIONS);
    } catch (error) {
      // display an error page if this fails
      response = {}
    }

    this.renderClock();
    this.setState({
      isTimeBeforeMidday: response.beforeMidday,
      loading: false
    }, () => SplashScreen.hide())
  }

  renderClock = () => setInterval(() => {
    this.setState({
      currentTime : new Date().toLocaleTimeString()
    })
  }, 1000)

  render() {
    const { isTimeBeforeMidday, loading, currentTime } = this.state;
    const ctaTitle = "Click To Start Session"

    return (
      <View style={styles.container}>
        {loading ? <ActivityIndicator size="large" color="#3359DF" /> : <Fragment>
          <TimeDisplay currentTime={currentTime} />
          <LandingInfo isTimeBeforeMidday={isTimeBeforeMidday} />
          <Button style={{}}>
            <Text style={styles.buttonText}>{ctaTitle}</Text>
          </Button>
        </Fragment>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonText: {
    padding: 20,
    color: 'green',
    border: '1px solid #000'
  }
});

export default LandingScreen;
