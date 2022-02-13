import { View, Text } from 'react-native'
import React from 'react'
import styles from './style';

function Banner({children}) {
  return (
    <View style={styles.banner}>
     {children}
    </View>
  )
}
export default Banner;