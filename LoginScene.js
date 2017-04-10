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

export default class LoginScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            password: '',

        };
        this.register = this.register.bind(this);
        this.forgotpassword = this.forgotpassword.bind(this);
    }

    componentWillMount() {

        // this.fetchData();
    }

    register() {

        var navigator = this.props.navigator;

        navigator.push({ id: 'signup', title: 'SignupScene', });

    }

    forgotpassword() {

        var navigator = this.props.navigator;

        navigator.push({ id: 'forgotpassword', title: 'ForgotpwdScene', });
    }

    goBack() {

        this.props.navigator.pop();
    }




    veryfyLogin() {
        LOGIN_URL = LOGIN_URL + "email=" + this.state.userid + "&" + "password=" + this.state.password;

        fetch(LOGIN_URL)
            .then((response) => {
                if (response.status === 201) {
                    Alert.alert("" + JSON.stringify(response._bodyText));
                    LOGIN_URL = 'http://192.168.0.86:3000/findId?'; //192.168.43.79//192.168.0.86
                    var navigator = this.props.navigator;
                    navigator.push({
                        id: 'dashboard',
                        title: 'DashBoardScene'

                    });


                } else if (response.status === 201) {
                    Alert.alert("" + JSON.stringify(response._bodyText));
                    LOGIN_URL = 'http://192.168.0.86:3000/findId?';//192.168.43.79//192.168.0.86

                } else if (response.status === 402) {
                    LOGIN_URL = 'http://192.168.0.86:3000/findId?';//192.168.43.79//192.168.0.86
                    // console.log("Response::"+JSON.stringify(response._bodyText));
                    Alert.alert("" + JSON.stringify(response._bodyText));
                }





            })
            .done();

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
                <TouchableHighlight onPress={() => this.goBack()} style={styles.thbackarrow}>
                    <Image
                        style={styles.backarrow}
                        source={require('./images/backarrow.png')} />
                </TouchableHighlight>

                <Text> User Name: </Text>

                <TextInput
                    style={{ height: 40 }}
                    ref={(el) => { this.userid = el; } }
                    placeholder="enter your email address"
                    onChangeText={(userid) => this.setState({ userid })}
                    value={this.state.userid}
                    />

                <Text> Password: </Text>

                <TextInput
                    ref={(el) => { this.password = el; } }
                    style={{ height: 40 }} password={true}
                    placeholder="password"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    />

                <Button
                    title="Login"
                    color="#1d1d20"
                    onPress={onButtonPress}
                    accessibilityLabel="Learn more about purple"
                    />

                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <View style={{ width: '40%', height: 80 }} >
                        <TouchableHighlight onPress={this.register}>
                            <Text style={styles.register}> Register </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{ width: '60%', height: 80 }} >
                        <TouchableHighlight onPress={this.forgotpassword}>
                            <Text style={styles.forgotpassword}>Forgot Password </Text>
                        </TouchableHighlight>
                    </View>

                </View>






            </View>

        )
    }
}

LoginScene.propTypes = {
    title: PropTypes.string.isRequired,
    // onForward: PropTypes.func.isRequired,
    // onBack: PropTypes.func.isRequired,
};

var styles = StyleSheet.create({

    register: {
        textAlign: 'left',
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

AppRegistry.registerComponent('LoginScene', () => LoginScene);



