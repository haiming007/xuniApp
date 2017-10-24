import React, {Component} from 'react';
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
		headerLeft:null,
		title:'魅力Top',
		header:null
	}
	render(){
     const {navigate} = this.props.navigation;
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
			<View style={{flex:1,backgroundColor:'white'}}>
				<View style={{backgroundColor:'#66cccc',alignItems:'center',flexDirection:'row',height:45,}}>
		            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>this.props.navigation.goBack()}>
		                <Image source={require('../image/jiantou.png')} style={{width:22,height:22}}/>
		                <Text style={{color:'#fff'}}>返回</Text>
		            </TouchableOpacity>
		            <Text style={{color:'#fff',alignSelf:'center',marginLeft:'40%'}}>魅力TOP</Text>
		        </View>
		        <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#ccc'}}>
		            <TouchableOpacity style={{marginLeft:10}} onPress={()=>navigate('ToConn')}>
		                <Text style={{margin:15,}}>附近</Text>
		            </TouchableOpacity>
		            <TouchableOpacity style={{borderBottomWidth:3,borderBottomColor:'#66cccc',marginLeft:20}}>
		                <Text style={{margin:15,color:'#66cccc'}}>魅力TOP</Text>
		            </TouchableOpacity>
		            <TouchableOpacity style={{marginLeft:20}}>
		                <Text style={{margin:15,}}>财富TOP</Text>
		            </TouchableOpacity>
		            <TouchableOpacity style={{marginLeft:20}}>
		                <Text style={{margin:15,}}>颜值TOP</Text>
		            </TouchableOpacity>
       			</View>
			    <View style={{flex:1}}>
			        <FlatList 
		                data = {arr}
		                keyExtractor={(item, index) => index}
		                renderItem = {({item}) => 
		                    <View style={styles.dashLine}>
		                        {item.num<=3?<Image source={require('../image/guan.png')} style={styles.gutyle}>
		                            <Text style={{color:'white',textAlign:'center',marginTop:10*size,fontSize:30*size,}}>{item.num}</Text>
		                        	</Image>:<Image source={require('../image/yuan.png')} style={styles.gutyle}>
		                        	        <Text style={{color:'white',textAlign:'center',marginTop:10*size,fontSize:30*size,}}>{item.num}</Text>
		                        	         </Image>
		                        }
		                        
		                        <Image source={item.hedImg} style={styles.imgstyle} />
		                        <View style={styles.contstyle}>
		                            <Text style={{color:'black',fontSize:36*size}}>{item.name}</Text>
		                            <Text style={{color:'black',marginTop:4,fontSize:24*size}}>{item.stat}  {item.age}岁  |  {item.city}</Text>
		                            <Text style={{color:'black',fontSize:24*size}}>{item.qm}</Text>
		                        </View>
		                        <View style={{flexDirection: 'row',marginTop:40*size,position:'absolute',right:10*size}}>
		                            <Text style={{color:'black',fontSize:24*size,}}>{item.ml}</Text>
		                            <Image source={require('../image/huo.png')} style={styles.charm}></Image>
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
    }
})