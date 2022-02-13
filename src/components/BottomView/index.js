import { ScrollView, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';
import styles from './style';
// marginTop:hp(34), 

function BottomView({children, topPosition}) {
  const handleScroll = (e) => {
    // console.log(e);
  }
  return (
    <ScrollView onScroll={handleScroll} style={styles.wrap}>
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