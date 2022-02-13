import { Text, SafeAreaView } from 'react-native'
import React from 'react';
import Header from '../../components/Header';
import globalStyle from '../../styles/globalStyle';

export default function Credit() {
  return (
    <SafeAreaView style={globalStyle.container}>
      <Header/>
      <Text>Credit Card</Text>
    </SafeAreaView>
  )
}