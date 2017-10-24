/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import Login from './src/app/Index';
import Register from './src/app/page/Register';
import RegistMore from './src/app/page/RegistMore';
import Home from './src/app/page/Home';
import MyHome from './src/app/page/MyHome';
import Products from './src/app/page/Products';
import Cloths from './src/app/page/ClothList';
import Mann from './src/app/page/Mann';
import Conn from './src/app/page/Conn';
import Other from './src/app/page/Himself';
import Ablum from './src/app/page/Ablum';
import Chat from './src/app/page/Chat';
import City from './src/app/page/City';
import BeforeHome from './src/app/page/Before';
import MlTop from './src/app/page/ph/MlTop';
const paihangTab = TabNavigator({
  ToConn:{
    screen:Conn,
  },
  ToMlTop:{
    screen:MlTop,
  },
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#009999',
    color:'#333',
    scrollEnabled:false,
    style: {
    backgroundColor: '#ccc',
    height:45,
    },
  },
   swipeEnabled:true,
   tabBarVisible: true
});
const footTab = TabNavigator({
  ToHome: {
    screen: Home,
  },
  ToConn:{
    screen:paihangTab
  },
  ToFashion:{
    screen:Products,
  },
  ToMann: {
    screen:Mann,
  },

}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#009999',
    scrollEnabled:false,
    style: {
    backgroundColor: '#66cccc',
    height:55,
    },
     showIcon:true,
  },
   swipeEnabled:false,
   tabBarVisible: true
});
const xunni = StackNavigator({
  ToBefore:{screen:BeforeHome},
  ToHome: {screen:footTab},
  ToConn:{screen:paihangTab},
  ToOther: {screen:Other},
  ToAblum:{screen:Ablum},
  ToChat:{screen:Chat},
  ToCity:{screen:City},
  ToLogin:{screen:Login},
  ToMlTop:{screen:MlTop},
  ToCloth:{screen:Cloths}
});
AppRegistry.registerComponent('xunni', () => xunni);
