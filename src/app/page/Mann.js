import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SectionList
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Mystyle from './../js/styles';
export default class Mann extends Component {
 static navigationOptions = {
    title: '管理',
    header:null,
    tabBarIcon:({ tintColor,focused}) => (
        <Image
          source={require('../image/guanli.png')}
          style={focused?[styles.icon, {tintColor: '#009999'}]:[styles.icon, {tintColor: '#fff'}]}/>
    ),
  };
  render() {
   const {navigate} = this.props.navigation;
    return (
     <View>
        <View style={Mystyle.head}>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>this.props.navigation.goBack()}>
                <View>
                    <Image source={require('../image/jiantou.png')} style={Mystyle.iconBack}/>
                    <Text style={{color:'#fff',marginLeft:30,marginTop:-20}}>返回</Text>
                </View>
            </TouchableOpacity>
            <Text style={Mystyle.hedTit}>管理</Text>
        </View>
        <View style={{backgroundColor:'#eee',}}>
          <View style={{flexDirection:'row',backgroundColor:'#fff'}}>
            <SectionList
                renderItem={({item})=>
                <TouchableOpacity style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#ccc'}}>
                        <Image source={item.img} style={{width:30,height:30,margin:10}} />
                        <Text style={{alignSelf:'center'}}>{item.desc}</Text>
                        <Image source={require('../image/jiantou1.png')} style={Mystyle.iconMore}/>
                </TouchableOpacity>}
                renderSectionHeader={({section})=><View style={{height:10,backgroundColor:'#eee',}}><Text style={{lineHeight:5}}>{section.title}</Text></View>}
                sections={[ 
                  {data: [{img:require('../image/2.png'),desc:'我的首页',key:'1'},
                          {img:require('../image/2.png'),desc:'谁看过我',key:'2'},
                          {img:require('../image/3.png'),desc:'账号切换',key:'3'}],title:''},
                  {data: [{img:require('../image/4.png'),desc:'官方活动',key:'xie1'},
                          {img:require('../image/5.png'),desc:'充值豆豆',key:'xie2'},
                          {img:require('../image/6.png'),desc:'道具现场',key:'xie3'},
                          {img:require('../image/7.png'),desc:'哈西礼物',key:'xie4'}], title:''},
                  {data: [{img:require('../image/8.png'),desc:'系统设置',key:'xie1'},], title:''}
                  ]}
              />
          </View>
        </View>
        
     </View>
    );
  }
}
const styles = StyleSheet.create({
  icon:{
    width:20,height:20
  }
});
