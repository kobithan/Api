/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Api from './Api'
import Test from './Test'
import Test3 from './Test3'
import Test2 from './Test2'
import Test4 from './Test4'
import Huex from './Screen/Huex'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const stackNavigator = createStackNavigator({
  Huex: Huex
})
const App = createAppContainer(stackNavigator)



//const App =() => {
//return (
//<View>
//<Test3/>
//</View>
  
//)}
export default App