import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet, Dimensions} from 'react-native';
import { theme } from '../constants/theme';
export default StyleSheet.create({
  container:{
    backgroundColor:theme.THEME_WHITE_COLOR,
    flex:1,
  },
  btnSave:{
    backgroundColor:theme.THEME_SUB_COLOR,
    height:hp(8),
    width:wp(80),
    alignSelf:'center',
    alignItems:'center',
    borderRadius:wp(7),
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.20,
    // shadowRadius: 1.41,

    // elevation: 2,
  },
  btnSaveText:{
    color:theme.THEME_WHITE_COLOR,
    fontSize:hp(2.5),
    fontWeight:'500',
    paddingTop:hp(1.8),
    letterSpacing:wp(0.1)

  }
})