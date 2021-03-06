import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  BackHandler,
  AsyncStorage
} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class Index extends Component {
  static navigationOptions = {
    title: '用户登录',
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
    userName:''
    }
  }
  login(){
      if(this._userName._lastNativeText==='huaxinxin'&&this._pwd._lastNativeText==='123456'){
        const {navigate}=this.props.navigation;
        //存储
        AsyncStorage.setItem('userName',this._userName._lastNativeText,(err)=>{
          (err==null)?navigate('ToHome',{username:this._userName._lastNativeText}):alert('内部存储发生错误！');
        })
        
      }else{
        alert('用户名或密码错误!');
      }
  }
  render() {
  const {navigate} = this.props.navigation;
    return (
     <View>
        <View style={{alignItems:'center'}}>
            <Image source={require('./image/01.png')} style={{width:80,height:80,marginTop:15}}/>
        </View>
        <View>
            <View style={styles.textInput}>
                <Text style={{marginTop:10}}>账户：</Text>
                <TextInput placeholder='手机/用户名/邮箱'
                       underlineColorAndroid='transparent'
                       style={{width:'80%'}}
                       ref={(e)=>this._userName=e}

                 />
            </View>
            <View style={styles.textInput}>
                <Text style={{marginTop:10}}>密码：</Text>
                <TextInput placeholder='密码'
                 underlineColorAndroid='transparent'
                 style={{width:'80%'}}
                  ref={(e)=>this._pwd=e}
                />
            </View>
            <Text style={{color:'#66cccc',marginLeft:'78%',marginBottom:20,marginTop:10}}>忘记密码？</Text>
        </View>
        <View>
            <TouchableOpacity
                style={{width:'90%',marginLeft:'5%',backgroundColor:'#009999',height:45,alignItems:'center',marginTop:15}}
                onPress={this.login.bind(this)}>
                <Text style={styles.btnTxt}>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => navigate('ToRegister',{ name: 'Jane' })}>
                <Text style={styles.btnTxt}
                >注册</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{alignSelf:'center',marginTop:25,color:'#ccc'}}>第三方合作登录</Text>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View style={{marginTop:20}}>
                   <Image source={require('./image/weixin.png')} style={styles.icon} />
                </View>
                <View style={{marginLeft:30,marginTop:20}}>
                   <Image source={require('./image/qq.png')} style={styles.icon} />
                </View>
                <View style={{marginLeft:30,marginTop:20}}>
                   <Image source={require('./image/weibo.png')} style={styles.icon} />
                </View>
            </View>
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
