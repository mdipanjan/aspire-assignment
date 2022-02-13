import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import globalStyle from '../../styles/globalStyle';
import Header from '../../components/Header';

export default function Home() {
  return (
    <SafeAreaView style={globalStyle.container}>
      <Header/>
      <Text>Home</Text>
    </SafeAreaView>
  )
}