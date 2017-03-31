/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator, Alert, View, Text, TouchableHighlight, Image, StyleSheet, BackAndroid } from 'react-native';

import MyScene from './MyScene';
import DashBoardScene from './DashBoardScene';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import LoginScene from './LoginScene';
import SignupScene from './SignupScene';



export default class AwesomeProject extends Component {

  constructor(props) {
    super(props);
    this.state = {

      isCancel: false,
    };


  }


  componentWillMount() {

 }

  renderScene(route, navigator) {

    //android back button handeling

    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (navigator && navigator.getCurrentRoutes().length > 2) {


        navigator.pop();
        return true;
      }

      else {

        return false;

      }
    });

   



    switch (route.id) {
      case 'myscene':
        return (<MyScene title="Myscene" navigator={navigator}  {...route.passProps} route={route} />)
        case 'dashboard':

       return (<DashBoardScene title="DashBoardScene" navigator={navigator}  {...route.passProps} route={route} />)

      case 'productlist':

        return (<ProductList title="ProductList" navigator={navigator}  {...route.passProps} route={route} />)

      case 'productdetails':

        return (<ProductDetails title="ProductDetails" navigator={navigator} {...route.passProps} route={route} />)

      case 'login':
        return (<LoginScene title="LoginScene" navigator={navigator} {...route.passProps} route={route} />)

        case 'signup':
        return (<SignupScene title="SignupScene" navigator={navigator} {...route.passProps} route={route} />)
        }

    }

  render() {

    return (

 


      <Navigator
     
        initialRoute={{ title: 'MyScene', index: 0, id: "myscene" }}
        renderScene={this.renderScene}

        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        } }

        

        />



    )
  }
}





AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
