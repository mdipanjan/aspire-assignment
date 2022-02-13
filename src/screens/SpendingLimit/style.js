import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import {theme, font} from '../../constants/theme';

export default StyleSheet.create({
  limitInputWrap:{
    width:wp(88),
    alignSelf:'center'
  },
  limitInputWrapBox:{
    flexDirection:'row',
    marginTop:hp(3)
  },
  input:{
    borderBottomColor:'#22222266',
    borderBottomWidth:hp(0.1),
    fontSize:hp(2.8),
    fontWeight:'500',
    paddingLeft:wp(14)
  },
  payBtn:{
    backgroundColor:theme.THEME_SUB_COLOR,
    height:hp(3.2),
    width:wp(10),
    borderRadius:wp(1),
    marginTop:hp(1),
    position:'absolute',
    top:hp(6.8)
  },
  priceSelectWrap:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:wp(88),
    alignSelf:'center',
    marginTop:hp(4)
    
  },
  priceSelectBtn:{
    backgroundColor:'rgba(32, 209, 97,0.1)',
    width:wp(25),
    height:hp(5.5),
    flexDirection:'column',
    justifyContent:'center'
  },
  MainText:{
    fontSize:hp(3.5),
    fontFamily:font.BOLD,
    color:theme.THEME_WHITE_COLOR,
    letterSpacing:wp(0.1),
    marginTop:hp(-1),
    marginBottom:hp(2),
    marginLeft:wp(6)
  }
})