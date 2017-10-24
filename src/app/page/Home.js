import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  BackHandler,
  TouchableOpacity,
  ToastAndroid,
  DrawerLayoutAndroid,
  ViewPagerAndroid,
  AsyncStorage,
  ScrollView
} from 'react-native';
{/*页面跳转*/}
import {StackNavigator} from 'react-navigation';
// 抽屉菜单
import Drawer from 'react-native-drawer';
import Data from './../js/data';
import Mystyle from './../js/styles';
var now=this.lastBackPressed;
// 计时
var count=0;
var play=null;
var defClass=null;
export default class Home extends Component {
  static navigationOptions = {
       title: '主页',
       header:null,
       tabBarIcon: ({ tintColor,focused}) => (
        <Image
          source={require('../image/search.png')}
          style={focused?[styles.icon, {tintColor: '#009999'}]:[styles.icon, {tintColor: '#fff'}]}
        />
    ),
  };
  constructor(){
    super();
    this.state={
    }
  }
  getMes(){
    const {navigate} = this.props.navigation;
    return navigate('ToMyHome',{ name: 'Jane' });
  }
  goBack(){
    this.props.navigation.goBack();
  }
  //挂载
  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
  }
  //卸载
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }
  onBackAndroid=()=>{
  	if(BackHandler!=undefined){
  		if (now && now + 3000 >= Date.now()) {
           //最近3秒内按过back键，可以退出应用。
			BackHandler.exitApp();
          return false;
    	 }
      	now = Date.now();
      	ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
       }
       return true;
   }
  // 获取本地存储信息
  render() {
   const {navigate} = this.props.navigation;
    var navigationView = (  
    <View style={{flex: 1, backgroundColor:'#fff'}}>
        <Image source={require('../image/defImg.jpg')} style={{width:80,height:80,alignSelf:'center',marginTop:20,marginBottom:15}} />
      {AsyncStorage.getItem('userName')._55==null?
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{backgroundColor:'#66cccc', marginLeft:25,marginRight:15}} onPress={()=>navigate('ToLogin')}>
            <Text style={{marginLeft:20,marginRight:20,marginTop:10,marginBottom:10,color:'#fff'}}>登录</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#ccc',}}><Text style={{marginLeft:20,marginRight:20,marginTop:10,marginBottom:10,color:'#fff'}}>注册</Text></TouchableOpacity>
      </View>
      :
      <View>
          <Text>dffgfdh</Text>
          <Text>个人中心</Text>
          <Text>关于软件</Text>
      </View>

      }
      
    </View>  
  );  
    return (
    <DrawerLayoutAndroid  
        drawerWidth={200}  
        drawerPosition={DrawerLayoutAndroid.positions.Left}  
        renderNavigationView={() =>navigationView}>
         <View style={{alignItems:'center',flex:1,}}>
          <Image source={require('../image/b1.jpg')} style={Mystyle.hedBg}>
                <Text style={{color:'#fff',fontSize:20,marginLeft:'87%',marginTop:10}}
                      onPress={()=>navigate('ToCity',{name:'aa'})}>城市</Text>
                <Text style={{color:'#fff',fontSize:30,marginTop:50,marginLeft:'3%'}}>2017-9-6  第一期</Text>
                <Text style={{color:'#fff',fontSize:35,marginTop:30,marginLeft:'3%'}}>封面女郎</Text>
          </Image>
          
        </View>
        <View style={{marginTop:250}}>
           <FlatList
                ref={(flatList)=>this.flatList=flatList}
                data={Data}
                renderItem={({item}) =>
                  <TouchableOpacity style={{height:80,flexDirection:'row'}}  onPress={() => navigate('ToOther',{obj:item,id: item.key })}>
                    <Image source={item.hedImg} style={{width:60,height:60,margin:10}}/>
                     <View style={{marginLeft:20}} >
                        <Text style={{marginTop:10,fontSize:20}}>{item.name}</Text>
                        <Text>{item.age}岁  |  {item.city}</Text>
                        <Text>{item.qm}</Text>
                     </View>
                  </TouchableOpacity>}
                    ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'#ccc'}}></View>}
                    getItemLayout={(data,index)=>({length:80,offset:(80+1)*index,index})}
            ListFooterComponent={
              ()=><View style={Mystyle.listFoot}><Text style={Mystyle.listFooterTxt}>到底了~</Text></View>
                   } 
            />
           
        </View>
    </DrawerLayoutAndroid>
    );
  }
}
const styles = StyleSheet.create({
  icon:{
  width:20,
  height:20
  },
   guideT: {
        textAlign: 'center',
        paddingTop: 10,
        marginTop: 450,
        color: 'red',
        fontSize: 20,
        height: 45,
        width: 150,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'red',
    },
});
const drawerStyles = {
    drawer: { shadowColor: '#0000ff', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 0},
}