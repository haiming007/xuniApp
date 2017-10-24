import React, {Component} from 'react'
import {StackNavigator,TabNavigator} from 'react-navigation';
import arrData from './../../js/data';
import _ from 'lodash';
var arr = _.cloneDeep(arrData);
import {
	AppRegistry,
	View,
	Text,
	TextInput,
	Button,
	Image,
	StyleSheet,
	FlatList,
  TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';
var { width, height, scale } = Dimensions.get('window');
var size=width/750;
export default class MConvers extends Component{
	static navigationOptions ={
		  title: '魅力TOP',
	      header:null,
	      tabBarIcon: ({ tintColor,focused}) => (
	        <Image source={require('../../image/huihua.png')}
	          style={focused?[styles.icon, {tintColor: '#009999'}]:[styles.icon, {tintColor: '#fff'}]}/>
	    ),
	}
	render(){
        var num = 0;
        for(var i=0; i<arr.length - 1;i++){
        	for(var j = 0; j <arr.length - 1 - i;j++){
        		if(arr[j].ml <=arr[j+1].ml){
        			num = arr[j]
        			arr[j] = arr[j+1]
        			arr[j+1] = num;
        		}
        	}
        }
        for(var i = 0;i<arr.length;i++){
        	arr[i].num = i+1
        }
		return(
			<View style={{flex:1,}}>
			    <View style={{flex:1}}>
			        <FlatList 
		                data = {arr}
		                keyExtractor={(item, index) => index}
		                renderItem = {({item}) => 
		                    <View style={styles.dashLine}>
		                        {item.num<=3?<Image source={require('./../../image/guan.png')} style={styles.gutyle}>
		                            <Text style={{color:'white',textAlign:'center',marginTop:10*size,fontSize:30*size,}}>{item.num}</Text>
		                        	</Image>:<Image source={require('./../../image/yuan.png')} style={styles.gutyle}>
		                        	        <Text style={{color:'white',textAlign:'center',marginTop:10*size,fontSize:30*size,}}>{item.num}</Text>
		                        	         </Image>}
		                        <Image source={item.hedImg} style={styles.imgstyle} />
		                        <View style={styles.contstyle}>
		                            <Text style={{color:'black',fontSize:36*size}}>{item.name}</Text>
		                            <Text style={{color:'black',marginTop:4,fontSize:24*size}}>{item.stat}  {item.age}岁  |  {item.city}</Text>
		                            <Text style={{color:'black',fontSize:24*size}}>{item.qm}</Text>
		                        </View>
		                        <View style={{flexDirection: 'row',marginTop:40*size,position:'absolute',right:10*size}}>
		                            <Text style={{color:'black',fontSize:24*size,}}>{item.ml}</Text>
		                            <Image source={require('./../../image/huo.png')} style={styles.charm}></Image>
		                        </View>
		                    </View>
		                }
		                
		            />
			    </View>
			    
			</View>

			)
	}
}
const styles = StyleSheet.create({
	dashLine: {
        flexDirection: 'row',
        height:175*size,
        marginLeft:20*size,
        marginRight:20*size,
        
    },
    gutyle:{
    	width:54*size,
    	height:54*size,
    	marginLeft:15*size,
    	marginTop:65*size,

    },
    imgstyle:{
        width:125*size,
        height:125*size,
        marginTop:24*size,
        marginLeft:20*size,

    },
    contstyle:{
        marginLeft:25*size,
        marginTop:25*size,
    },
    charm:{
    	width:31*size,
    	height:36*size,
    	marginLeft:10*size,
    },
    icon:{
    	width:20,
    	height:20
    }
})