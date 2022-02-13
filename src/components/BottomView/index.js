import { ScrollView, View } from 'react-native';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';
import styles from './style';

function BottomView({children, topPosition}) {
 
  return (
    <ScrollView style={styles.wrap}>
      <View 
        style={[
          styles.innerWrap, {
          marginTop:hp(topPosition)
        }]}
      >
      {children}
      </View>
    </ScrollView>
  )
}
export default BottomView;