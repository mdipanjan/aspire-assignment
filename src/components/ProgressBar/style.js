
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet, Dimensions} from 'react-native';
import {theme, font} from '../../constants/theme';

export default StyleSheet.create({
  progressBar:{
    backgroundColor:'rgba(32, 209, 97,0.1)',
    borderRadius:wp(5)
  },
  bar:{
    width: '19%',
    height: hp(1.6),
    backgroundColor: theme.THEME_SUB_COLOR,
    lineHeight: 30, /* To center it vertically */
    color: 'white',
    borderTopLeftRadius:wp(5),
    borderBottomLeftRadius:wp(5)
  }
})