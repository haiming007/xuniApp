import React, {Component} from 'react'
import {StackNavigator,TabNavigator} from 'react-navigation';
import Data from './../js/cloths';
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
	      header:null,
	}
	_renderItem = ({item}) => (
      <TouchableOpacity style={{flexDirection:'row',flexWrap:'wrap',alignItems: 'flex-start'}}>
         <View style={{backgroundColor: '#FFFFFF',justifyContent: 'center',width:30*Math.floor(Math.random()*(4)+3),height:30*Math.floor(Math.random()*(5)+3),alignItems: 'center',margin:10,}}>
             <Image source={item.defImg} style={{width:'100%',height:'100%'}} />
          </View>
      </TouchableOpacity>
      );
	render(){
		const {navigate} = this.props.navigation;
		return(
			<View style={{flex:1,}}>
				<FlatList
                //renderSectionHeader={this._renderSectionHeader}
                renderItem={this._renderItem}
                data={Data}
                pageSize={3}
                contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',alignItems: 'flex-start'}}
                showsVerticalScrollIndicator={false}
              />
			</View>

			)
	}
}
const styles = StyleSheet.create({
    icon:{
    	width:20,
    	height:20
    }
})