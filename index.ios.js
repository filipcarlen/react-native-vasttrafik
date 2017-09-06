/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Vasttrafik extends Component {

  constructor(props){
    super(props);
    this.state = {
      isAuthentificated: false,
      token: 'asadsads',
    };
  }

  componentDidMount() {
    
    fetch('https://api.vasttrafik.se/token?Content-Type=application/x-www-form-urlencoded&grant_type=client_credentials&client_secret=PfRar6qUyJEUCVb76lB7WAGwAqUa&client_id=k_4W8mS4sVIUHehrY2e3t1Bl5wAa&format=json', { 
      method: 'post',  
    }).then((res) => { return res.json() })
      .then((data) => {
      this.setState({
        isAuthentificated: true,
        token: data.access_token,
      })
    });
  }

  render() {

    var isAuth = (
      this.state.isAuthentificated ? <Text> Inloggad </Text> : <Text>Utloggad</Text>
    );

    return (
      <View style={styles.container}>
        {isAuth}
         <Text>{this.state.isAuth}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Vasttrafik', () => Vasttrafik);
