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
    }

    componentWillMount() {

        // this.fetchData();
    }




    veryfyLogin() {
        LOGIN_URL = LOGIN_URL+"email="+this.state.userid+"&"+"password="+this.state.password;

        fetch(LOGIN_URL)
            .then((response) => {
                if (response.status === 201) {
                    Alert.alert(""+JSON.stringify(response._bodyText));
                    LOGIN_URL = 'http://192.168.0.86:3000/findId?'; //192.168.43.79//192.168.0.86
                    var navigator = this.props.navigator;
                    navigator.push({
                        id: 'dashboard',
                        title: 'DashBoardScene'
                        
                    });


                } else if(response.status === 201){
                    Alert.alert(""+JSON.stringify(response._bodyText));
                    LOGIN_URL = 'http://192.168.0.86:3000/findId?';//192.168.43.79//192.168.0.86
                    
                } else if(response.status === 402){
                    LOGIN_URL = 'http://192.168.0.86:3000/findId?';//192.168.43.79//192.168.0.86
                    // console.log("Response::"+JSON.stringify(response._bodyText));
                    Alert.alert(""+JSON.stringify(response._bodyText));
                }





                 })
            .done();

    }


    render() {
        onButtonPress = () => {
          if(this.state.userid === '' && this.state.password == ''){
               Alert.alert("username or password can not be empty!!")
           }
           else {
              this.veryfyLogin(); 
           }
          
      
    };

        return (

            <View  >

                <Text> User Name: </Text>

                <TextInput
                    style={{ height: 40 }}
                    ref= {(el) => { this.userid = el; }}
                    placeholder="enter your email address"
                    onChangeText={(userid) => this.setState({ userid })}
                    value={this.state.userid}
                    />

                <Text> Password: </Text>

                <TextInput
                    ref= {(el) => { this.password = el; }}
                    style={{ height: 40 }} password={true}
                    placeholder="password"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    />

                <Button
                    title="Login"
                    color="#841584"
                    onPress={onButtonPress}
                    accessibilityLabel="Learn more about purple"
                    />
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
        height: 30,
        width: '100%',

        backgroundColor: '#071880'
    }

});

AppRegistry.registerComponent('LoginScene', () => LoginScene);



