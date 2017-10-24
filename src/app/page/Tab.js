import React, { Component } from 'react';
 import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   Image,
   View,
   TouchableOpacity
 } from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;


export default class TabTopView extends Component {
    render() {
        return (           
            <ScrollableTabView
                renderTabBar={() => <DefaultTabBar />
                }
                tabBarPosition='overlayTop'
                tabBarUnderlineStyle={styles.lineStyle}
                tabBarActiveTextColor='#66cccc'
                onChangeTab={(obj) => {
                     console.log('index:' + obj.i);
                 }
             }
                >
                <Text style={styles.textStyle} tabLabel='发现'>发现</Text>
                <Text style={styles.textStyle} tabLabel='魅力TOP'>魅力TOP</Text>
                <Text style={styles.textStyle} tabLabel='财富TOP'>财富TOP</Text>
                <Text style={styles.textStyle} tabLabel='颜值TOP'>颜值TOP</Text>
            </ScrollableTabView>
        );
    }
    }

  {/*
                      item.user._id==1?
                      <View style={{flexDirection:'row'}}>
                          <Image source={item.user.headImg} style={{width:50,height:50,margin:10}}/>
                          <View style={{borderWidth:1,borderColor:'#ccc',borderRadius:5,alignSelf:'center'}}><Text style={{marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>{item.text}</Text></View>
                      </View>:
                      <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                          <View style={{borderWidth:1,borderColor:'#ccc',borderRadius:5,alignSelf:'center'}}><Text style={{marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>{item.text}</Text></View>
                          <Image source={item.user.headImg} style={{width:50,height:50,margin:10}}/>
                      </View>
                  */}

      {/*
    let mesObj={
      _id:2,
    text:'val',
    createdAt:'09:45',
    user:{
    _id:2,
    name:'Hua xinxin',
    headImg:require('./../image/02.png'),
    },
    key:key
    }
    key++
    */}
 const styles = StyleSheet.create({
     container: {
         flex:1,
         marginTop: 45
     },
     lineStyle: {
         width:ScreenWidth/4,
         height: 2,
         backgroundColor: '#66cccc',
     },
     textStyle: {
         fontSize:20,
         marginTop:10,
         textAlign:'center',
     },

 });