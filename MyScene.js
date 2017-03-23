import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Image,StyleSheet,Navigator,AppRegistry } from 'react-native';


export default class MyScene extends Component {


   

    componentWillMount () {
    
    
var navigator = this.props.navigator;

     

         setTimeout(function(){navigator.push({
             id: 'dashboard',
             title: 'DashBoardScene',
             index: 1

            
         });}, 1000);
    
    
    }
    
  render() {
      let pic = {
      uri: 'http://drwzpk38qkpfb.cloudfront.net/www.elgenmfg.com/uploaded/images/images/logo_3.gif'
    };
    return (
        
      <View style={{backgroundColor:'#071880',flex: 1, flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}
      >

      <Image source={pic} style={{width: 200, height: 100}}/>
    </View>
     
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
 // onForward: PropTypes.func.isRequired,
 // onBack: PropTypes.func.isRequired,
};

AppRegistry.registerComponent('MyScene', () => MyScene);



