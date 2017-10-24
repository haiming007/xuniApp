import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
{/*页面跳转*/}
import {StackNavigator} from 'react-navigation';
import Mystyle from './../js/styles';
import MlTop from './ph/MlTop';
import Data from './../js/data';
export default class Home extends Component {
  static navigationOptions = {
      title: '附近',
      header:null,
      tabBarIcon: ({ tintColor,focused}) => (
        <Image source={require('../image/huihua.png')}
          style={focused?[styles.icon, {tintColor: '#009999'}]:[styles.icon, {tintColor: '#fff'}]}/>
    ),
  };
  render() {
  var {navigate} = this.props.navigation;
  return (
     <View style={{flex:1}}>
        <View style={{flex:1}}>
          <FlatList
              data={Data}
              renderItem={({item}) =>
                  <TouchableOpacity style={{height:80,flexDirection:'row'}} onPress={() => navigate('ToOther',{ id: item.key })} >
                      <Image source={item.hedImg} style={{width:60,height:60,margin:10}}/>
                      <View style={{marginLeft:20}} >
                        <Text style={{marginTop:10,fontSize:20}}>{item.name}</Text>
                        <Text>{item.age}岁  |  {item.city}</Text>
                        <Text>{item.qm}</Text>
                      </View>
                  </TouchableOpacity>}
            ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'#ccc'}}></View>}
            getItemLayout={(data,index)=>({length:80,offset:(80+1)*index,index})}
            ListFooterComponent={()=>
              <View style={Mystyle.listFoot}>
                  <Text style={Mystyle.listFooterTxt}>到底了~</Text>
              </View>
            }/> 
      </View>
          
    </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
        
     },
     lineStyle: {
         width:90,
         height: 2,
         backgroundColor: '#66cccc',
     },
     textStyle: {
         backgroundColor:'#eee',
         marginTop:10,
     },
    icon:{
      width:20,
      height:20
        }
});
