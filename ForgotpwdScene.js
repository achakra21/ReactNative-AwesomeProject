import React, { Component, PropTypes } from 'react';
import {
    View, Text, TouchableHighlight, Image, StyleSheet, Navigator, AppRegistry, ListView, TextInput,
    Button, Alert
} from 'react-native';
import DashBoardScene from './DashBoardScene';
var REQUEST_URL = 'https://jsonplaceholder.typicode.com/photos';
var LOGIN_URL = 'http://192.168.0.86:3000/findId?';//192.168.43.79//192.168.0.86
var MOVIES_PER_ROW = 3;
var arr = [];

export default class ForgotpwdScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            password: '',

        };

        this.register = this.register.bind(this);
        this.forgotpassword = this.forgotpassword.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    componentWillMount() {

        // this.fetchData();
    }

    goBack(){
   
    this.props.navigator.pop();
  }

    register() {

        Alert.alert('Presss');
    }

    forgotpassword(){
        Alert.alert('forgotpassword');

    }





    render() {
        onButtonPress = () => {
            if (this.state.userid === '' && this.state.password == '') {
                Alert.alert("username or password can not be empty!!")
            }
            else {
                this.veryfyLogin();
            }


        };

        return (

            <View  >

            <View style={styles.toolbar} >

        </View>
        <TouchableHighlight onPress={() => this.goBack()}   style={styles.thbackarrow}>
    <Image  
           style={styles.backarrow}
            source={require('./images/backarrow.png')}/>
 </TouchableHighlight>

                <Text> Email Address: </Text>

                <TextInput
                    style={{ height: 40 }}
                    ref={(el) => { this.userid = el; } }
                    placeholder="enter your email address"
                    onChangeText={(userid) => this.setState({ userid })}
                    value={this.state.userid}
                    />

                <Text> Confirm Email Address: </Text>

                <TextInput
                    ref={(el) => { this.password = el; } }
                    style={{ height: 40 }} password={true}
                    placeholder="Confirm Email Address"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    />

                <Button
                    title="Submit"
                    color="#1d1d20"
                    onPress={onButtonPress}
                    accessibilityLabel="Learn more about purple"
                    />

    </View>

        )
    }
}

ForgotpwdScene.propTypes = {
    title: PropTypes.string.isRequired,
    // onForward: PropTypes.func.isRequired,
    // onBack: PropTypes.func.isRequired,
};

var styles = StyleSheet.create({

    register: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        color: '#1a23e2'


    },

    bottomview: {
        flex: 1,
        flexDirection: 'row'
    },

    forgotpassword: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        color: '#1a23e2'
    },

    toolbar: {
    height: '15%',
    width: '100%',

    backgroundColor: '#1d1d20'
  },
backarrow: {
    height: 30,
    width: 30,
    position: 'absolute',
    marginTop: 3,
    marginLeft:15,
    alignSelf: 'flex-start'
  },
  thbackarrow: {
    height: 40,
    width: 40,
    position: 'absolute',
    alignSelf: 'flex-start'

  }


});

AppRegistry.registerComponent('ForgotpwdScene', () => ForgotpwdScene);



