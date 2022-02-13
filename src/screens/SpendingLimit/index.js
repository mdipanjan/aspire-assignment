import {SafeAreaView, TouchableOpacity, Text, StatusBar, View, TextInput  } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { font, theme } from '../../constants/theme';
import globalStyle from '../../styles/globalStyle';
import Banner from '../../components/Banner';
import BottomView from '../../components/BottomView';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './style';
import Pickup from '../../assets/images/icons/pickup-car.svg';

export default function SpendingLimit({navigation}) {
  const [disable, setDisable] = useState(true);
  const [data, setData] = useState([
    {
      "num": 2000
      },
      {
      "num": 10000
      },
      {
      "num": 30000
      }
  ]);
  const [val, setVal]  = useState('');
  
  useEffect(()=>{
   if(navigation?.getState()?.routes[1]?.params){
     let {payload} = navigation?.getState()?.routes[1]?.params;
     setData(payload.spending_premade);
   }
  },[])
  return (
    <SafeAreaView style={globalStyle.container}>
      <StatusBar backgroundColor={theme.THEME_MAIN_COLOR} barStyle="light-content" />
      <Header 
        hasBack={true} 
        top={true}
        navigation={navigation}
      />
      <Banner>
      <Text style={styles.MainText}>Spending Limit</Text>
      </Banner>
      <BottomView topPosition={20}>
        <View style={styles.limitInputWrap}>
          <View style={styles.limitInputWrapBox}>
            <Pickup style={{marginTop:hp(0.4)}}/>
            <Text style={{marginLeft:wp(2), color:theme.THEME_BLACK_TEXT, fontFamily:font.Bold}}>Set a weekly debit card spending limit</Text>
          </View>
          <View style={styles.payBtn}>
            <Text style={{textAlign:'center', color:theme.THEME_WHITE_COLOR, fontFamily:font.BOLD, fontSize:hp(2)}}>S$</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={e=>{setVal(e)}}
            value={val}
            placeholder=""
            keyboardType='numeric'
          />
          <Text style={{color:'#22222266', fontSize:hp(1.8), marginTop:hp(1.6)}}>Here weekly means the last 7 days - not the calendar week</Text>
        </View>
        <View style={styles.priceSelectWrap}>
          {data.map(elem=>{return (
            <TouchableOpacity 
              onPress={()=>{
                  setVal(elem.num.toString());
                  setDisable(false);
                }
              }
              style={styles.priceSelectBtn} 
              key={elem.num}>
              <Text style={{textAlign:'center', color:'#01D167', fontSize:hp(1.8), letterSpacing:wp(0.05)}}>S${elem.num}</Text>
            </TouchableOpacity>
          )})}
        </View>
        <View style={{height:hp(100), position:'relative'}}>
          <TouchableOpacity 
            onPress={() => {
              navigation.navigate('Main', {
                payload: {},
              });
              setDisable(true);
            }}
            disabled={disable ? true : false} 
            style={[
              globalStyle.btnSave, 
              {
                position:'absolute', 
                top:hp(42),
                 backgroundColor:disable?'#EEEEEE':theme.THEME_SUB_COLOR
            }]}
          >
            <Text style={globalStyle.btnSaveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </BottomView>
    </SafeAreaView>
  )
}