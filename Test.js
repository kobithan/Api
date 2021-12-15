import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
 

 
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
     };
   }
 
     componentDidMount(){
    fetch('http://oiikii.huex.xyz:8080/api/v1/service')
       .then(response=>{
            return response.json();
       }).then(responseData => {
           console.log(responseData);

           this.setState({
            isLoading: false,
            dataSource: responseData
           })
       })}
 
     render(){
     return(
      <View style={{padding:10}}>
      <FlatList
      padding ={30}
         data={this.state.dataSource}
         renderItem={({item}) => 
         <View style={{height: 50}}>
         <Text style={{height: 50}}>{item.service}</Text>
         <View style={{height: 1,backgroundColor:'gray'}}></View>
         </View>
        }
       />
      
     </View>
     )}
}