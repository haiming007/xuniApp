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
} from 'react-native';
{/*页面跳转*/}
import {StackNavigator} from 'react-navigation';
import Register from './Register';
import RegistMore from './RegistMore';
import MyHome from './MyHome';
export default class Himself extends Component {
  static navigationOptions = {
       title: 'Ta的主页',
       header:null,
       tabBarIcon: ({ tintColor,focused}) => (
        <Image
          source={require('../image/huihua.png')}
          style={focused?[styles.icon, {tintColor: '#009999'}]:[styles.icon, {tintColor: '#fff'}]}
        />
    ),
  };
  constructor(){
    super();
    this.state={
      id:null
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    var id=this.props.navigation.state.params.id;
    var obj=this.props.navigation.state.params.obj;
    return( 
       <View>
        <View style={{alignItems:'center',flex:1}}>
             <Image source={obj.bg} style={{width:'100%',height:250,}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Image source={require('../image/jiantou.png')} 
                               style={{width:22,height:22,marginLeft:10,alignSelf:'center'}}
                               />
                  </TouchableOpacity>
                    <Text style={{color:'#fff',alignSelf:'center',marginLeft:100}}>{obj.name}的主页</Text>
                </View>
             </Image>
        </View>
        <View style={{marginTop:250,height:80,flexDirection:'row'}} >
            <Image source={obj.hedImg} style={{width:60,height:60,marginTop:-30,marginLeft:20}}/>
            <View style={{marginLeft:20}} >
               <Text style={{marginTop:-30,fontSize:20,color:'#fff'}}>{obj.name}</Text>
               <Text>{obj.age}岁  |  {obj.city}</Text>
               <Text>{obj.qm}</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:-10}}>
            <TouchableOpacity style={{width:78,height:80,marginLeft:10,marginRight:10}} onPress={()=> navigate('ToAblum',{ablums:obj.ablums})}>
              <Image source={obj.ablums[0].img} style={{width:78,height:80,}} >
              <View style={{backgroundColor:'#66cccc',marginTop:60}}><Text style={{color:'#fff',alignSelf:'center'}}>相册({obj.ablums.length}张)</Text></View>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity style={{width:78,height:80,marginRight:10}}>
              <Image source={obj.likes[0].defImg} style={{width:78,height:80,}} >
               <View style={{backgroundColor:'#66cccc',marginTop:60}}><Text style={{color:'#fff',alignSelf:'center'}}>喜欢({obj.likes.length}件)</Text></View>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity style={{width:78,height:80,marginRight:10}}>
              <Image source={obj.cart[0].defImg} style={{width:78,height:80,}} >
               <View style={{backgroundColor:'#66cccc',marginTop:60}}><Text style={{color:'#fff',alignSelf:'center'}}>想买({obj.cart.length}件)</Text></View>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity style={{width:78,height:80,marginRight:10}}>
              <Image source={obj.gifts[0].defImg} style={{width:78,height:80,}} >
               <View style={{backgroundColor:'#66cccc',marginTop:60}}><Text style={{color:'#fff',alignSelf:'center'}}>礼物({obj.gifts.length}件)</Text></View>
              </Image>
            </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'#ccc',height:30,flexDirection:'row',marginTop:30}}><Text style={{lineHeight:25,marginLeft:10}}>TA的资料</Text><Text style={{marginLeft:250,lineHeight:25}}>更多</Text></View>
        <View>
            <FlatList 
              data={obj.labs}
              horizontal={true}
              renderItem={({item}) =>
                  <View style={{borderColor:'#66cccc',borderRadius:10,borderWidth:1,marginLeft:10,marginTop:10}}>
                    <Text style={{margin:10}}>{item.lab}</Text>
                  </View>}
            />
        </View>
        <View style={{flexDirection:'row',marginTop:20,}}>
          <TouchableOpacity style={styles.footBtn} onPress={()=>navigate('ToChat',{obj:obj,id:(id-1)})}><Text style={styles.btnTxt}>发送消息</Text></TouchableOpacity>
          <TouchableOpacity style={styles.footBtn}><Text style={styles.btnTxt}>赠送礼物</Text></TouchableOpacity>
        </View>
     </View>
   )
  }
}

const styles = StyleSheet.create({
  footBtn:{
    backgroundColor:'#66cccc',
    marginLeft:60,
  },
  btnTxt:{
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    marginBottom:10,
    color:'#fff'
  },
  icon:{
  width:20,
  height:20
  }
});
