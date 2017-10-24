import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  FlatList,
  SectionList,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
{/*页面跳转*/}
import {StackNavigator} from 'react-navigation';
import Data from './../js/data';
var key=0;
export default class Chat extends Component {
  static navigationOptions = {
       header:null
  };
  constructor(){
    super();
    this.state={
      mess:[]
    }
  }

  sendMes(){
    //获取输入框内容
    let val=this._mess._lastNativeText;
    //创建一个新的对象装入mess数据库中
    let mesObj={
     _id:key,
    text:val,
    createdAt:'09:45',
    user:{
    uid:2,
    name:'Hua xinxin',
    headImg:require('./../image/02.jpg'),
    },
    key:key
    }
    var arr=this.state.mess.push(mesObj);
    key+=1
    this.setState((state)=>({mess:state.mess.concat(arr)}));
    console.log(this.state.mess)
  }
  render() {
    var id=this.props.navigation.state.params.id;
    var obj=this.props.navigation.state.params.obj;
    return (
          <KeyboardAvoidingView behavior='padding' style={{flex:1,backgroundColor:'#fff'}}>
              <View style={{flexDirection:'row',backgroundColor:'#66cccc',height:40}}>
              <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Image source={require('../image/jiantou.png')} 
                       style={{width:22,height:22,marginLeft:10,alignSelf:'center'}}
                       />
              </TouchableOpacity>
              <Text style={{color:'#fff',alignSelf:'center',marginLeft:130}}>{obj.name}</Text>
              <Image source={require('../image/xx.png')} style={{width:22,height:22,marginTop:10,marginBottom:10,marginLeft:90}} />
          </View>
          <View style={{flexDirection:'row',backgroundColor:'#66cccc',height:40,}}>
              <Text style={{alignSelf:'center',color:'#fff',marginLeft:10,marginRight:20}}>赠送礼物</Text>
              <Text style={{alignSelf:'center',color:'#fff',marginRight:20}}>聊天记录</Text>
              <Text style={{alignSelf:'center',color:'#fff'}}>加黑名单</Text>
          </View>
          <View style={{backgroundColor:'#fff',height:435}}>
              <FlatList 
                  data={this.state.mess}
                  renderItem={({item})=>
                     

                      <Text>{item.text}</Text>
                    }
              />
          </View>
              <View style={{backgroundColor:'#fff',flexDirection:'row',position:'absolute',bottom:0}}>
                    <TextInput 
                        placeholder='发送消息' 
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={{borderWidth:1,borderColor:'#66cccc',width:284,marginLeft:5,}}
                        ref={(e)=>this._mess=e}/>
                    <TouchableOpacity style={{backgroundColor:'#66cccc',marginRight:5}} onPress={this.sendMes.bind(this)}>
                          <Text style={{color:'#fff',marginLeft:20,marginRight:20,marginTop:15,marginBottom:15}}>发送</Text>
                    </TouchableOpacity>
              </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  
});
