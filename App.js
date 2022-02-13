/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppContainer from './src/navigator';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



function App() {
  
  return (
    <SafeAreaView style={{flex:1}}>
      <AppContainer/>
    </SafeAreaView>
  );
};



export default App;
