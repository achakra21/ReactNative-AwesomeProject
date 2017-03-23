'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  AppRegistry, BackAndroid, Navigator, ToolbarAndroid,TouchableHighlight,TouchableOpacity
} from 'react-native';

export default class ProductDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      title: this.props.title
    };

  }

  componentWillMount() {


  }

  renderScene(route, navigator) {
  }

  goBack(){
   
    this.props.navigator.pop();
  }



  render() {

    // alert("URL"+this.props.url);
    var description = this.props.title;
    var imgURL = this.props.url;

    //calls renderScene method
    this.renderScene();

    return (


      <View style={styles.container} >


        <View style={styles.toolbar} >

        </View>


        <Image style={styles.image} source={{ uri: imgURL }}
          />
        <View style={styles.heading}>
          <Text style={styles.price}></Text>
          <Text style={styles.title}></Text>
          <View style={styles.separator} />
        </View>
        <Text style={styles.description}>{description}</Text>
       
<TouchableHighlight onPress={() => this.goBack()}   style={styles.thbackarrow}>
    <Image  
           style={styles.backarrow}
            source={require('./images/backarrow.png')}/>
 </TouchableHighlight>
          
    
        <Image
          style={styles.appicon}

          //./image to get the icons from images folder
          source={require('./images/app_logo.png')}
          />
        <Text style={styles.description}></Text>

        
      </View>



    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 0,

  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {

    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
  ,
  toolbar: {
    height: '10%',
    width: '100%',

    backgroundColor: '#071880'
  }
  ,
  appicon: {

    position: 'absolute',
    marginTop: 8,
    alignSelf: 'center'

  },
  backarrow: {
    height: 30,
    width: 30,
    position: 'absolute',
    marginTop: 8,
    marginLeft:20,
    alignSelf: 'flex-start'
  },
  thbackarrow: {
    height: 40,
    width: 40,
    position: 'absolute',
    alignSelf: 'flex-start'

  }
});


AppRegistry.registerComponent('ProductDetails', () => ProductDetails);