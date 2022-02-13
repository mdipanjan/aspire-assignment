import { View, Text } from 'react-native'
import React from 'react'
import style from './style';

export default function ProgressBar() {
  return (
    <View style={style.progressBar}>
      <View style={style.bar}></View>
    </View>
  )
}