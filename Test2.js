import React, {Component} from 'react';

import {StyleSheet, View, TouchableOpacity, Text, FlatList} from 'react-native';

import axios from 'axios';


class Home extends Component {

    state ={
        posts: []
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0,10)
            })
        })
    }



    render(){
        const { posts } =this.state;
        const postList = posts.length ? ( posts.map(post => {
             return(
                <View style={styles.container}>
                <FlatList
                padding ={30}
                   data={this.state.posts}
                   renderItem={({posts}) => 
                   <View style={{height: 50}}>
                   <Text style={{height: 50}}>{posts.title}</Text>
                 
                   </View>
                  }
                 />
                
               </View>
               )
               })) : (
              <Text>nouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</Text>
              )
               return (
               <View>
             <Text>{postList}</Text>  
            </View>
                )
              }
      }  
export default Home;



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