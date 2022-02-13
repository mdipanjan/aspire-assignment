import {Text, SafeAreaView, View,StatusBar, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import BottomView from '../../components/BottomView';
import globalStyle from '../../styles/globalStyle';
import styles from './styles';
import { theme, font } from '../../constants/theme';
import IconSee from '../../assets/images/icons/see.svg'
import InsightIcon from '../../assets/images/icons/insight.svg'
import TransferIcon from '../../assets/images/icons/Transfer-2.svg'
import CardLogo from '../../assets/images/logo/card-logo.svg';
import Transfer from '../../assets/images/icons/Transfer.svg';
import Transfer3 from '../../assets/images/icons/Transfer-3.svg';
import Transfer1 from '../../assets/images/icons/Transfer-1.svg';
import VisaLogo from '../../assets/images/logo/Visa-logo.svg';
import ToggleLogo from '../../assets/images/icons/toggle.svg';
import Hide from '../../assets/images/icons/hide.svg';
import Toggle2 from '../../assets/images/icons/toggle2.svg';
import Banner from '../../components/Banner';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ProgressBar from '../../components/ProgressBar';
import {debitService} from '../../service/debit.service';

function DebitCard({navigation}) {
  const [show, setShow] = useState(true);
  const [showSpending, setShowSpending] = useState(false);
  const [data, setData] = useState({});
  const toggleCard = () => {
    setShow(!show);
  }
  const fetchDebitData = async () => {
    const res = await debitService();
    if(res.status === 200){
      setData(res?.data);
    }
  }
  useEffect(()=>{
    fetchDebitData();
  },[])
  return (
    <SafeAreaView style={globalStyle.container}>
      <StatusBar backgroundColor={theme.THEME_MAIN_COLOR} barStyle="light-content" />
      <Header 
        hasBack={false}
        top={false}
        navigation={navigation}
      />
      <Banner>
        <View style={styles.bannerTextBox}>
          <Text style={styles.MainText}>Debit Card</Text>
          <Text style={styles.subText}>Available Balance</Text>
          <View style={styles.btnPriceWrap}>
            <View style={styles.payBtnWrap}>
              <View style={styles.payBtn}>
                <Text style={{textAlign:'center', color:theme.THEME_WHITE_COLOR, fontFamily:font.BOLD, fontSize:hp(1.8), paddingTop:hp(0.5)}}>S$</Text>
              </View>
            </View>
            <View style={styles.priceWrap}> 
              <Text style={styles.price}>{data.balance}</Text>
            </View>
          </View>
        </View>
      </Banner>
      <BottomView topPosition={34}>
        <View style={styles.creditCardWrap}>
          <View style={styles.hideWrap}>
            <TouchableOpacity onPress={toggleCard} style={styles.hideBtn}>
              <View style={styles.hideBtnWrap}>
                {
                  show ? <IconSee /> : <Hide />
                }
                <Text style={styles.hideText}>
                  {
                    show ?   'Show card number' : 'Hide card number'
                  }
                  
                </Text>
              </View>
            
            </TouchableOpacity>
          </View>
          <View style={styles.creditCard}>
            <View style={styles.cardLogoWrap}>
              <CardLogo/>
            </View>
            <View style={styles.cardInfoWrap}>
              <Text style={styles.carDName}>{data?.card_info?.name}</Text>
                  {
                    show ? 
                    
                    <Text style={[styles.cardNum, {fontSize:hp(1.3)}]}>{'\u2B24'}{'\u2B24'}{'\u2B24'}{'\u2B24'}  {'\u2B24'}{'\u2B24'}{'\u2B24'}{'\u2B24'}  {'\u2B24'}{'\u2B24'}{'\u2B24'}{'\u2B24'}  <Text style={styles.cardNum}>2020</Text> </Text>
                    :
                    <Text style={styles.cardNum}>
                      {data?.card_info?.card_num?.num1}
                      {"  "}  
                      {data?.card_info?.card_num?.num2}
                      {"  "}  
                      {data?.card_info?.card_num?.num3}
                      {"  "}  
                      {data?.card_info?.card_num?.num4} 
                    </Text>
                    
                  }
              <View style={styles.cardinfoBox}>
                <Text style={[styles.cardExp]}>Thru: {data?.card_info?.date}</Text>
                <Text style={styles.cardExp}>CVV: {show ? <Text style={{fontSize:hp(2.5)}}>***</Text> : data?.card_info?.cvv}</Text>

              </View>
            </View>
            <View style={{paddingTop:hp(3), position:'absolute', bottom:hp(1), right:wp(2)}}>  
              <View style={[styles.cardLogoWrap, {marginTop:hp(-0.5)}]}>
                <VisaLogo/>
              </View>
            </View>   
          </View>
        </View>
        <View style={styles.spendingWrap}>

          <View style={{width:wp(86), alignSelf:'center', marginTop:hp(3)}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:hp(1)}}>
              <Text style={{color:'#222222'}}>Debit card spending limit</Text>
              <Text><Text style={{color:theme.THEME_SUB_COLOR, fontWeight:'500'}}>${data?.card_info?.spent}</Text> <Text style={{color:'#22222233'}}>| ${data?.card_info?.spending_limit}</Text></Text>
            </View>
            <ProgressBar/>
          </View>
        </View>
        <View>
          <View style={[styles.debitInfos, {marginTop:hp(3)}]}>
              <View style={styles.debitInfoIconWrap}>
                <InsightIcon/>
              </View>
              <View style={styles.debitInfoTextWrap}>
                <Text style={styles.debitInfoMainText}>Top-up account</Text>
                <Text style={styles.debitInfoSubText}>Deposit money to your account to use with card</Text>
              </View>
              <View style={styles.debitInfoToggleWrap}>
              </View>
          </View>
          <View style={styles.debitInfos}>
              <View style={styles.debitInfoIconWrap}>
                <TransferIcon/>
              </View>
              <View style={styles.debitInfoTextWrap}>
                <Text style={styles.debitInfoMainText}>Weekly spending limit</Text>
                <Text style={styles.debitInfoSubText}>You haven’t set any spending limit on card</Text>
              </View>
              <View style={styles.debitInfoToggleWrap}>
                <TouchableOpacity  
                  onPress={() =>{ 
                    if(showSpending){
                      setShowSpending(false);
                    }else{
                      setShowSpending(true);
                      navigation.navigate('SpendingLimit', {
                        payload: data,
                      })
                    }
                    
                  }}
                >
                {
                      showSpending ? 
                      <>
                      <View 
                        style={{
                          backgroundColor:'#fff', 
                          borderRadius:wp(10), 
                          height:wp(3.6), 
                          width:wp(3.6),
                          position:'absolute',
                          zIndex:100, right:wp(3), marginTop:hp(0.4)}}>
                          
                          </View>
                          <Toggle2/> 
                          </>
                          :
                          <ToggleLogo/>
       
                    }
                    
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.debitInfos}>
              <View style={styles.debitInfoIconWrap}>
                <Transfer3/>
              </View>
              <View style={styles.debitInfoTextWrap}>
                <Text style={styles.debitInfoMainText}>Freeze card</Text>
                <Text style={styles.debitInfoSubText}>Your debit card is currently active</Text>
              </View>
              <View style={styles.debitInfoToggleWrap}>
                <ToggleLogo/>
              </View>
          </View>
          <View style={styles.debitInfos}>
              <View style={styles.debitInfoIconWrap}>
                <Transfer1/>
              </View>
              <View style={styles.debitInfoTextWrap}>
                <Text style={styles.debitInfoMainText}>Get a new card</Text>
                <Text style={styles.debitInfoSubText}>This deactivates your current debit card</Text>
              </View>
              <View style={styles.debitInfoToggleWrap}></View>
          </View>
          <View style={styles.debitInfos}>
              <View style={styles.debitInfoIconWrap}>
                <Transfer/>
              </View>
              <View style={styles.debitInfoTextWrap}>
                <Text style={styles.debitInfoMainText}>Deactivated cards</Text>
                <Text style={styles.debitInfoSubText}>Your previously deactivated cards</Text>
              </View>
              <View style={styles.debitInfoToggleWrap}></View>
          </View>
        </View>
       
      </BottomView>
    </SafeAreaView>
  )
}
export default DebitCard;