import React, { PureComponent, Component } from 'react';
import { StyleSheet, View, Alert, Dimensions, Button, Text, TouchableOpacity } from 'react-native';

import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import Boundary from 'react-native-boundary';

class App extends Component {


  componentDidMount() {
    Boundary.add({
      lat: 37.894877,
      lng: 127.058664,
      radius: 50,
      id: "Chipotle",
    })
    .then(() => console.log("success!"))
    .catch(e=>console.log(e));
  }

  render() {
    return (
      <View>
        <Text>Boundary Text</Text>
      </View>
    );
  }
}

export default App;