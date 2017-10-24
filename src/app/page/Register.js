import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class Register extends Component {
  static navigationOptions = {
    title: '用户注册',
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
  render() {
    return (
     <View>
        <View style={{alignItems:'center'}}>
             <Image source={require('../image/01.png')} style={{width:80,height:80,marginTop:70}}/>
        </View>
        <View>
            <View style={styles.textInput}>
                <TextInput placeholder='输入您的昵称'
                       underlineColorAndroid='transparent'
                       style={{width:'100%'}}
                 />
            </View>
        </View>
        <View>
            <Text style={{alignSelf:'center',marginTop:220,marginBottom:30}}>选择封面</Text>
        </View>
        <View>
            <TouchableOpacity style={{width:'100%',backgroundColor:'#009999',height:45,alignItems:'center',}}>
               <Text style={styles.btnTxt}>下一步</Text>
            </TouchableOpacity>
        </View>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  btn:{
  width:'90%',
  marginLeft:'5%',
  height:45,
  marginTop:10,
  backgroundColor:'#66cccc',
  alignItems:'center',
  },
  icon:{
  width:50,
  height:50,
  },
  textInput:{
  width:'90%',
  marginLeft:'5%',
  marginTop:90,
  height:50,
  borderBottomColor:'#ccc',
  borderBottomWidth:1,
  flexDirection:'row'
  },
  btnTxt:{
  alignSelf:'center',
  color:'#fff',
  marginTop:15,
  }
});
