import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native'
import axios from 'axios'



export default class Axios extends Component{

    constructor(props) {
        super(props)
        this.state ={
            isLoding: true,
            dataSource: []
        }
    }

    componentDidMount(){
       
       fetch('http://jsonplaceholder.typicode.com/posts')
       .then(response=>{
            return response.json();
       }).then(responseData => {
           console.log(responseData);

           this.setState({
            isLoading: false,
            dataSource: responseData
           })
       })






       // fetch('http://jsonplaceholder.typicode.com/posts')
        //.then((response)=> response.json())
        //.then((responseJson)=> {
          //  this.setState({
            //    isLoading: false,
              //  dataSource: responseJson
            //})
        //})
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
                <Text>{item.title}</Text>
                
            </View>
        )
    }

    render(){
        let {container} = styles
        let {dataSource, isLoading} =this.state

        if (isLoading) {
            return(
                <View style={styles.container}>
                 <ActivityIndicator size="large" animating/>

                 </View>
            )
        }else {

            return(
                <View style={container}>
                  <FlatList
                    data={dataSource}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )
        }
        
    }


}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:50
    },
   item:{
       padding: 5,
       borderBottomWidth: 1,
       borderBottomColor: '#eee'
   }
})