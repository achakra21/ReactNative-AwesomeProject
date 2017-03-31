import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Image,StyleSheet,Navigator,AppRegistry,ListView} from 'react-native';
var REQUEST_URL = 'https://jsonplaceholder.typicode.com/photos';
var MOVIES_PER_ROW = 3;
var arr = [];

export default class SignupScene extends Component {
constructor(props){
  super(props);
  this.state = {
 
    };
}

   componentWillMount () {

     // this.fetchData();
     }


     
//rowID is the row postion 
 renderRow(rowData, sectionID, rowID) {
    return (
     
     
      <TouchableHighlight onPress={() => this.rowPressed(rowID)} 
       style={styles.row}
          underlayColor='#dddddd'>
        <View>
          
           <Image style={ {width:120 ,height:120} }  source={{ uri: rowData.thumbnailUrl }} />
           <Text style={styles.title}>{rowData.title.substring(0,10)}</Text>
           <View style={styles.separator}/>
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

SignupScene.propTypes = {
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

AppRegistry.registerComponent('SignupScene', () => SignupScene);



