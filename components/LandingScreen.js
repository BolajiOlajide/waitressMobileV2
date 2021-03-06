import React, { Component, Fragment } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Modal, Alert, TouchableHighlight } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import NfcManager from 'react-native-nfc-manager';
import LottieView from 'lottie-react-native';

// components
import LandingInfo from './LandingInfo';
import TimeDisplay from './TimeDisplay';
import Button from './Button';

// utils
import request from '../utils/request';
import { MEAL_SESSIONS } from '../utils/url';
import { is_before_midday } from '../utils/date';

class LandingScreen extends Component {
  state = {
    isTimeBeforeMidday: null,
    loading: true,
    currentTime: new Date().toLocaleTimeString(),
    isModalVisible: false
  }

  async componentDidMount() {
    // let response;

    // try {
    //   response = await request.get(MEAL_SESSIONS);
    // } catch (error) {
    //   // display an error page if this fails
    //   response = {}
    // }
    const isTimeBeforeMidday = is_before_midday();

    NfcManager.isEnabled().then(res => console.log(res));

    this.renderClock();
    this.setState({
      isTimeBeforeMidday,
      loading: false
    }, () => SplashScreen.hide())
  }

  renderClock = () => setInterval(() => {
    this.setState({
      currentTime : new Date().toLocaleTimeString()
    })
  }, 1000)

  toggleModal = () => {
    this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));
  }

  render() {
    const { isTimeBeforeMidday, loading, currentTime } = this.state;
    const ctaTitle = "Start Session"

    return (
      <View style={styles.container}>
        {loading ? <ActivityIndicator size="large" color="#3359DF" /> : <Fragment>
          <Text style={styles.title}>Welcome to Waitress V2!</Text>
          <TimeDisplay currentTime={currentTime} />
          <LandingInfo isTimeBeforeMidday={isTimeBeforeMidday} />
          <Button style={styles.buttonContainer} onPress={this.toggleModal}>
            <Text style={styles.buttonText}>{ctaTitle}</Text>
          </Button>
          <LottieView source={require('../lottie_animations/7747-loader.json')} />;

          <Modal
            animationType="slide"
            transparent
            visible={this.state.isModalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={this.toggleModal}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
          </Modal>
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
    backgroundColor: '#f7f7f7',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonText: {
    padding: 15,
    color: '#0b0b0b',
    backgroundColor: '#E8E8E8',
    borderRadius: 10
  },
  buttonContainer: {
    width: '60px',
    borderRadius: 20
  },
  title: {
    fontSize: 20,
    color: '#000'
  }
});

export default LandingScreen;
