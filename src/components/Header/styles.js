import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export default StyleSheet.create({
 
  header:{
    backgroundColor:theme.THEME_MAIN_COLOR, 
    paddingLeft:wp(5.2),
    paddingRight:wp(4),
    paddingTop:wp(1),
    paddingBottom:wp(5),
    flexDirection:'row',
    justifyContent:'space-between',
  },
  headerleft:{
    width: wp(10),
    height:hp(4),
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

