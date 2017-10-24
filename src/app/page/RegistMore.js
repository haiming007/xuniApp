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
import Dimensions from 'Dimensions';
export default class RegistMore extends Component {
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
  render() {
    const {navigate} = this.props.navigation;
    var { width, height, scale } = Dimensions.get('window');
    return (
     <View>
        <View style={{alignItems:'center'}}>
            <Image source={require('../image/01.png')} style={{width:80,height:80,marginTop:25}}/>
        </View>
        <View>
            <View style={styles.textInput}>
                <Text style={{marginTop:15}}>账户：</Text>
                <TextInput placeholder='手机/用户名/邮箱'
                       underlineColorAndroid='transparent'
                       style={{width:'80%'}}
                 />
            </View>
            <View style={styles.textInput}>
                <Text style={{marginTop:15}}>密码：</Text>
                <TextInput placeholder='密码'
                 underlineColorAndroid='transparent'
                 style={{width:'80%'}}
                />
            </View>
            <Text style={{color:'#66cccc',marginLeft:'78%',marginBottom:30,marginTop:10}}>忘记密码？</Text>
        </View>
        <View>
            <TouchableOpacity style={{width:'90%',marginLeft:'5%',backgroundColor:'#009999',height:45,alignItems:'center',marginTop:30}}>
                <Text style={styles.btnTxt}>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => navigate('ToRegister',{ name: 'Jane' })}>
                <Text style={styles.btnTxt}
                >注册</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{alignSelf:'center',marginTop:40,color:'#ccc'}}>第三方合作登录</Text>

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
