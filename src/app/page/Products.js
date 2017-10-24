import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SectionList
} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class Index extends Component {
  static navigationOptions = {
    title:'时尚',
    header:null,
    tabBarIcon: ({ tintColor,focused}) => (
        <Image
          source={require('../image/yi.png')}
          style={focused?[styles.icon, {tintColor: '#009999'}]:[styles.icon, {tintColor: '#fff'}]}/>
    ),
  };
  _renderSectionHeader = ({ section }) => (
        <View style={{height:30,backgroundColor:'#ccc',}}>
            <Text style={{marginLeft: 10,padding: 6.5,fontSize: 12,color: '#666',}} >{section.key}</Text>
        </View>
    );
  render() {
          const {navigate} = this.props.navigation;
    return (
     <View>
        <View style={{alignItems:'center',flex:1}}>
             <Image source={require('../image/bg1.png')} style={{width:'100%',height:250,}} />
        </View>
        <View style={{backgroundColor:'#eee',marginTop:250}}>
          <View style={{flexDirection:'row',backgroundColor:'#fff'}}>
            <SectionList
                renderItem={({item}) =>
                    <TouchableOpacity style={{flexDirection:'row',flexWrap:'wrap',alignItems: 'flex-start'}} onPress={()=>navigate('ToCloth')}>
                       <View style={{backgroundColor: '#FFFFFF',justifyContent: 'center',width: 100,height: 130,alignItems: 'center',margin:10,}}>
                           <Image source={item.img} style={{width:100,height:90,margin:10}} />
                           <Text style={{alignSelf:'center'}}>{item.desc}</Text>
                        </View>
                    </TouchableOpacity>
                }
                sections={[
                  {data: [{img:require('../image/yi1.png'),desc:'夏季新品',key:'yi1'},
                          {img:require('../image/yi2.png'),desc:'夏季新品',key:'yi2'},
                          {img:require('../image/yi3.png'),desc:'夏季新品',key:'yi3'},
                          {img:require('../image/yi4.png'),desc:'夏季新品',key:'yi4'}], title:'衣橱'},
                  {data: [{img:require('../image/xie1.png'),desc:'夏季新品',key:'xie1'},
                          {img:require('../image/xie2.png'),desc:'夏季新品',key:'xie2'},
                          {img:require('../image/xie3.png'),desc:'夏季新品',key:'xie3'},
                         {img:require('../image/xie4.png'),desc:'夏季新品',key:'xie4'}], title:'鞋柜'},
                ]}
                pageSize={4}
                contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',alignItems: 'flex-start'}}
                showsVerticalScrollIndicator={false}
              />
          </View>
        </View>
     </View>
    );
  }
}
const styles = StyleSheet.create({
   icon:{
    width:20,
    height:20
      }
});
