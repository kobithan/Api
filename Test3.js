

import React from 'react';

import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import axios from 'axios';

const App = () => {
  
       axios
        .get('http://oiikii.huex.xyz:8080/api/v1/service')
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      
      return (
        <View style={styles.container}>
<Text> </Text>
        </View>
       );
         };

 


  
  
           

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;