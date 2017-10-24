import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ViewPagerAndroid
} from 'react-native';
{/*页面跳转*/}
import {StackNavigator} from 'react-navigation';
import Mystyle from './../js/styles';
import Dimensions from 'Dimensions';
var { width, height, scale } = Dimensions.get('window');
export default class BeforeHome extends Component {
	static navigationOptions = {
       header:null
  };
	
render(){
	const {navigate} = this.props.navigation;
	{setTimeout(function(){
		return navigate('ToHome');
	},5000)}
	{console.log(width,height)}
return(
	<ViewPagerAndroid style={{flex:1}}>
        <View >
            <Image source={require('./../image/xia2.png')} style={{width: 360,height: 604}} />
		</View>
		<View >
		    <Image source={require('./../image/xia4.png')} style={{width: 360,height: 604}} >
		    	<Text style={styles.guideT} onpress={()=>alert(1)}>立即体验</Text>
		    </Image>
		</View>
	</ViewPagerAndroid>
		)
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
        marginLeft:'30%',
        color: 'red',
        fontSize: 20,
        height: 45,
        width: 150,
        alignItems:'center',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'red',
    },
});	
