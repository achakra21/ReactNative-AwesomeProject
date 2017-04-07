import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Navigator, AppRegistry, ListView, Alert } from 'react-native';
//var REQUEST_URL = 'https://jsonplaceholder.typicode.com/photos';//http://192.168.43.79:3000
var REQUEST_URL = 'http://192.168.0.86:3000/findallitems';
var MOVIES_PER_ROW = 3;
var arr = [];

export default class DashBoardScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      ds: null,
      url: "",
      title: "",
      loaded: false,
    };

    ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });


  }

  componentWillMount() {
    this.fetchData();
  }

  rowPressed(rowID) {

    console.log("responseData:::" + JSON.stringify(arr[rowID]));
    this.state.url = arr[rowID].imgURL;
    this.state.title = arr[rowID].description;


    this.props.navigator.push({
      id: "productdetails",
      index: 2,
      title: "ProductDetails",
      passProps: {
        name: 'productdetails',
        component: DashBoardScene,
        url: this.state.url,
        title: this.state.title,


      },


    });
  }

  fetchData() {

    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {

        for (var x in responseData) {


          arr.push(responseData[x]);
        }
        this.setState({
          loaded: true,


          // set the datasource here    
          dataSource: ds.cloneWithRows(arr)
        });
      })
      .done();

  }
  //rowID is the row postion 
  renderRow(rowData, sectionID, rowID) {
    return (


      <TouchableHighlight onPress={() => this.rowPressed(rowID)}
        style={styles.row}
        underlayColor='#dddddd'>
        <View>

          <Image style={{ width: 120, height: 120 }} source={{ uri: rowData.imgURL }} />
          <Text style={styles.title}>{rowData.shopName}</Text>
          <View style={styles.separator} />
        </View>


      </TouchableHighlight>

    );
  }

  render() {

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.mainView}>
        <ListView contentContainerStyle={styles.list}

          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          />

      </View>

    )
  }

  renderLoadingView() {
    return (
      <View>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderItem(item) {
    return <Movie movie={item} />
  }
}

DashBoardScene.propTypes = {
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
    height: 30,
    width: '100%',

    backgroundColor: '#071880'
  }

});

AppRegistry.registerComponent('DashBoardScene', () => DashBoardScene);



