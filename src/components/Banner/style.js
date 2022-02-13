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

  
})