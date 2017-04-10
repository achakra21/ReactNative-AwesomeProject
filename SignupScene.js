import React, { Component, PropTypes } from 'react';
import {
  View, Text, TouchableHighlight, Image, StyleSheet, Navigator, AppRegistry, ListView, TextInput
  , ScrollView, Picker, Button, Alert
} from 'react-native';
var REQUEST_URL = 'https://jsonplaceholder.typicode.com/photos';
var EMAIL_VALIDATION_URL = 'http://192.168.0.86:3000/checkemailvalidation';
var MOVIES_PER_ROW = 3;
var arr = [];
import CalendarPicker from 'react-native-calendar-picker';



export default class SignupScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      confirmemail: '',
      password: '',
      confirmpassword: '',
      selectedStartDate: null,
      country: null,
      pincode: null,
      state: null,
      sex: null,
      address: null,

    };

    this.goBack = this.goBack.bind(this);
    this.onRegister = this.onRegister.bind(this);

  }

  componentWillMount() {


  }


  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  goBack() {

    this.props.navigator.pop();
  }

  onRegister() {
   

    fetch('http://192.168.0.86:3000/checkemailvalidation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email
      })

    }).then((response) => {
      if (response.status === 201) {
         Alert.alert("" + JSON.stringify(response._bodyText));
       
       

      } else if (response.status === 402) {
        Alert.alert("" + JSON.stringify(response._bodyText));
        
      }
    }).catch((error)=>{
     
      Alert.alert(""+error.message);
  });
  }

  render() {

    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';



    return (

      <View>

        <ScrollView>
          <View style={styles.toolbar} >

          </View>

          <TouchableHighlight onPress={() => this.goBack()} style={styles.thbackarrow}>
            <Image
              style={styles.backarrow}
              source={require('./images/backarrow.png')} />
          </TouchableHighlight>

          <Text> Email Id: </Text>

          <TextInput
            style={{ height: 40 }}
            ref={(el) => { this.email = el; } }
            placeholder="enter your email address"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            />
          <Text> Confirm Email Id: </Text>

          <TextInput
            style={{ height: 40 }}
            ref={(el) => { this.confirmemail = el; } }
            placeholder="confirm your email address"
            onChangeText={(confirmemail) => this.setState({ confirmemail })}
            value={this.state.userid}
            />

          <Text> Password: </Text>

          <TextInput
            style={{ height: 40 }}
            ref={(el) => { this.confirmpassword = el; } }
            placeholder="enter your password"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            />

          <Text>Confirm Password: </Text>

          <TextInput
            style={{ height: 40 }}
            ref={(el) => { this.confirmpassword = el; } }
            placeholder="confirm your password"
            onChangeText={(confirmpassword) => this.setState({ confirmpassword })}
            value={this.state.confirmpassword}
            />

          <CalendarPicker
            onDateChange={this.onDateChange}
            />

          <Text> Confirm Email Id: </Text>

          <TextInput
            style={{ height: 40 }}
            ref={(el) => { this.confirmemail = el; } }
            placeholder="confirm your email address"
            onChangeText={(confirmemail) => this.setState({ confirmemail })}
            value={this.state.userid}
            />

          <Picker
            selectedValue={this.state.country}
            onValueChange={(coun) => this.setState({ country: coun })}>
            <Picker.Item label="India" value="India" />
            <Picker.Item label="United Kingdom" value="uk" />
          </Picker>

          <Picker
            selectedValue={this.state.state}
            onValueChange={(state) => this.setState({ state })}>
            <Picker.Item label="odisha" value="Odisha" />
            <Picker.Item label="karnataka" value="Karnataka" />
          </Picker>

          <Picker
            selectedValue={this.state.city}
            onValueChange={(city) => this.setState({ city })}>
            <Picker.Item label="bhubaneswar" value="Bhubaneswar" />
            <Picker.Item label="cuttack" value="Cuttack" />
          </Picker>

          <Text> Street Address: </Text>

          <TextInput
            style={{ height: 40 }}
            ref={(el) => { this.confirmemail = el; } }
            placeholder="enter your street address"
            onChangeText={(confirmemail) => this.setState({ confirmemail })}
            value={this.state.userid}
            />

          <Picker
            selectedValue={this.state.sex}
            onValueChange={(sex) => this.setState({ sex })}>
            <Picker.Item label="male" value="Male" />
            <Picker.Item label="female" value="Female" />
          </Picker>

          <Text> Street Address: </Text>

          <TextInput
            style={{ height: 40 }}
            ref={(el) => { this.address = el; } }
            placeholder="enter your street address"
            onChangeText={(address) => this.setState({ address })}
            value={this.state.address}
            />

          <Text> Pincode: </Text>

          <TextInput
            style={{ height: 40 }}
            ref={(el) => { this.pincode = el; } }
            placeholder="confirm your email address"
            onChangeText={(pincode) => this.setState({ pincode })}
            value={this.state.pincode}
            />
          <Button
            title="Register"
            color="#1d1d20"
            onPress={() => this.onRegister()}
            accessibilityLabel="Learn more about purple" />

        </ScrollView>

      </View>



    )
  }



}

SignupScene.propTypes = {
  title: PropTypes.string.isRequired,

};

var styles = StyleSheet.create({
  movie: {
    height: 150,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eeeeee',
    paddingTop: 8,
  },
  item: {
    backgroundColor: 'red',
    margin: 3,
    width: 100
  },
  row: {
    justifyContent: 'center',
    margin: 6,
    width: 150,
    height: 150,
    alignItems: 'center'
  },
  mainView: {
    paddingTop: 22,
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },

  toolbar: {
    height: 40,
    width: '100%',
    backgroundColor: '#1d1d20'
  },

  backarrow: {
    height: 30,
    width: 30,
    position: 'absolute',
    marginTop: 3,
    marginLeft: 15,
    alignSelf: 'flex-start'
  },
  thbackarrow: {
    height: 40,
    width: 40,
    position: 'absolute',
    alignSelf: 'flex-start'

  }

});

AppRegistry.registerComponent('SignupScene', () => SignupScene);



