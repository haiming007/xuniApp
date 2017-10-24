import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableNativeFeedback
} from 'react-native';
{/*页面跳转*/}
import {StackNavigator} from 'react-navigation';
import Data from './../js/data';
export default class Ablum extends Component {
  static navigationOptions = {
      title: '相册',
      headerStyle:{
      backgroundColor:"#66cccc",
      elevation:0,
      },
      headerTitleStyle:{
      fontSize:20,
      color:"#fff",
      alignSelf:'center'
      }
  };
  constructor(){
    super();
    this.state={
      id:null
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    var ablums=this.props.navigation.state.params.ablums;
    return( 
        <View style={{flexDirection:'row',marginTop:-10}}>
            <FlatList 
              data={ablums}
              renderItem={({item}) =>
                <TouchableNativeFeedback style={{width:78,height:80,marginLeft:10,marginRight:10}} >
                   <Image source={item.img} style={{width:78,height:80,}}/>
                </TouchableNativeFeedback>
            }/>
        </View>
   )
  }
}

const styles = StyleSheet.create({
});
