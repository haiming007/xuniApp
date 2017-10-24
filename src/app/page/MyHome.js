import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class MyHome extends Component {
  static navigationOptions = {
   header:null
  };
 constructor(){
     super();
     this.state={
     menu:[
         {photo:require('../image/m1.png'),name:'我的相册',key:'1'},
         {photo:require('../image/m2.png'),name:'我的背包',key:'2'},
         {photo:require('../image/m3.png'),name:'我喜欢的商品',key:'3'},
         {photo:require('../image/m4.png'),name:'我想买的商品',key:'4'},
         {photo:require('../image/m5.png'),name:'我想买的礼物',key:'5'},
         {photo:require('../image/m6.png'),name:'购买赠送礼物',key:'6'},
         {photo:require('../image/m7.png'),name:'我的设置',key:'7'},
         {photo:require('../image/m8.png'),name:'绑定淘宝账号',key:'8'},
     ]
     }
   }
  login(){
      if(this._userName._lastNativeText==='aa'&&this._pwd._lastNativeText==='aa'){
        const {navigate}=this.props.navigation;
        return navigate('ToHome',{username:'aa'});
      }else{
        alert('用户名或密码错误!')
      }
  }
  showFootTab(){
      if(this.flatList.offset>200){
      alert(1)
      }
  }
  render() {
    return (
     <View style={{flex:1,backgroundColor:'#ccc'}}>
        <View style={{alignItems:'center',flex:1}}>
            <Image source={require('../image/b1.jpg')} style={{width:'100%',height:250,}}>
                <Text style={{color:'#fff',fontSize:20,marginLeft:'87%',marginTop:20}}>消息</Text>
            </Image>
        </View>
        <Image source={require('../image/01.png')} style={{width:60,height:60,marginTop:-30,marginLeft:10}}/>
        <Text style={{marginTop:-50,fontSize:30,marginLeft:80,color:'#fff'}}>hua xinxin</Text>
        <Text style={{fontSize:20,marginLeft:80}}>bahhsdbabfsbndgn</Text>
        <View style={{marginTop:20,flex:1}}>
            <FlatList
                ref={(flatList)=>this.flatList=flatList}
                data={this.state.menu}
                renderItem={({item}) =>
                   <View style={{height:40,flexDirection:'row',backgroundColor:'#fff'}}>
                       <Image source={item.photo} style={{width:25,height:25,margin:8}}/>
                       <View style={{marginLeft:20}}>
                          <Text style={{marginTop:10,fontSize:20}}>{item.name}</Text>
                        </View>
                   </View>}
                ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'#ccc'}}></View>}
                getItemLayout={(data,index)=>({length:40,offset:(40+1)*index,index})}
                />
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
  marginTop:20,
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
