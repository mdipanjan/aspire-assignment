import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import {theme, font} from '../../constants/theme';

export default StyleSheet.create({
  banner:{
    backgroundColor:theme.THEME_MAIN_COLOR,
    height:hp(36),
  },
  creditCardWrap:{
    marginTop:hp(-12),
    width:wp(88),
    alignSelf:'center',
  },
  hideWrap:{
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  hideBtn:{
    backgroundColor:theme.THEME_WHITE_COLOR,
    width:wp(40),
    height:hp(5.5),
    borderTopLeftRadius:wp(2),
    borderTopRightRadius:wp(2),
    marginBottom:hp(-1),
    flexDirection:'row',
  },
  hideBtnWrap:{
    flex:1,
    height:hp(4.8),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  hideText:{
    color:theme.THEME_SUB_COLOR,
    fontSize:hp(1.8),
    marginLeft:wp(1)
  },
  creditCard:{
    backgroundColor:theme.THEME_SUB_COLOR,
    height:hp(28),
    width:wp(88),
    alignSelf:'center',
    borderRadius:wp(3),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  payBtnWrap:{
    width:wp(12.5)
  },
  payBtn:{
    backgroundColor:theme.THEME_SUB_COLOR,
    height:hp(3.2),
    width:wp(10),
    borderRadius:wp(1),
    marginTop:hp(1),
  },
  bannerTextBox:{
    marginLeft:wp(4.5)
  },
  MainText:{
    fontSize:hp(3.5),
    fontFamily:font.BOLD,
    color:theme.THEME_WHITE_COLOR,
    letterSpacing:wp(0.1),
    marginTop:hp(-3),
    marginBottom:hp(2)
  },
  subText:{
    fontFamily:font.REGULAR,
    color:theme.THEME_WHITE_COLOR,
    letterSpacing:wp(0.05),
    paddingVertical:hp(1)
  },
  btnPriceWrap:{
    flexDirection:'row'
  },
  priceWrap:{
  },
  price:{
    fontFamily:font.BOLD,
    fontSize:hp(3.5),
    marginTop:hp(0.3),
    color:theme.THEME_WHITE_COLOR
  },
  debitInfos:{
    height:hp(8), 
    marginBottom:wp(1),
    width:wp(88),
    alignSelf:'center',
    flexDirection:'row',
    marginBottom:hp(2),
  },
  debitInfoIconWrap:{
    flex:1,
  },
  debitInfoTextWrap:{
    flex:6,
  },
  debitInfoToggleWrap:{
    
    flex:1,
  },
  debitInfoMainText:{
    color:theme.THEME_MAIN_TEXT,
    fontWeight:'500',
    letterSpacing:wp(0.08)
  },
  debitInfoSubText:{
    color:'grey',
    fontSize:hp(1.8),
    letterSpacing:wp(0.02)
  },
  cardLogoWrap:{
    height:hp(5),
    flexDirection:'row',
    justifyContent:'flex-end',
    marginTop:hp(3),
    marginRight:wp(4.5)
  },
  carDName:{
    fontSize:hp(3.2),
    fontWeight:'bold',
    color:theme.THEME_WHITE_COLOR 
  },
  cardinfoBox:{
    flexDirection:'row',
    marginTop:hp(2)
  },
  cardNum:{
    fontSize:hp(1.8),
    color:theme.THEME_WHITE_COLOR,
    letterSpacing:wp(1),
    paddingTop:hp(2)
  }, 
  cardExp:{
    fontSize:hp(1.9),
    color:theme.THEME_WHITE_COLOR,
    width:wp(20),
    marginRight:wp(6)
  }, 
  cardInfoWrap:{
    marginLeft:wp(6)
  },
  spendingWrap:{
    height:hp(10),
  }

  
})