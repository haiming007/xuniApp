import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  SectionList,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
{/*页面跳转*/}
import {StackNavigator} from 'react-navigation';
import Register from './Register';
import RegistMore from './RegistMore';
import MyHome from './MyHome';
import Data from './../js/cityData';
import Mystyle from './../js/styles';
export default class City extends Component {
  static navigationOptions = {
       header:null
  };
  constructor(){
    super();
    this.state={
    }
  }
    _renderSectionHeader = ({ section }) => (
        <View style={{height:30,backgroundColor:'#eee'}}>
            <Text style={{marginLeft: 10,padding: 6.5,fontSize: 12,color: '#666',}} >{section.key}</Text>
        </View>
    );
  _renderItem = ({ item}) => (
                <TouchableOpacity style={{height:45,backgroundColor: '#FFFFFF',borderBottomColor:'#ccc',borderBottomWidth:1,}}>
                       <Text style={{alignItems:'center',lineHeight:35,marginLeft:10}}>{item.title}</Text>
                </TouchableOpacity>
    );
  render() {
     const {navigate} = this.props.navigation;
    return (
     <View>
        <View style={Mystyle.head}>
            <TouchableHighlight onPress={()=>this.props.navigation.goBack()}>
                <Image source={require('../image/jiantou.png')} 
                       style={Mystyle.iconBack}
                       />
            </TouchableHighlight>
            <Text style={Mystyle.hedTit}>城市选择</Text>
        </View>
        <View style={{backgroundColor:'#fff',padding:10}}>
            <TextInput 
                placeholder='输入城市或搜字母搜素' 
                style={{width:'90%',marginLeft:'5%',borderWidth:1,borderColor:'#ccc',borderRadius:5}}
                underlineColorAndroid='transparent'/>
        </View>
        <View>
           <SectionList
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                sections={Data}
              />
        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
