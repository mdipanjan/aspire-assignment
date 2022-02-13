import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export default StyleSheet.create({
 
  wrap:{backgroundColor:'transparent', height:'100%', width:'100%', position:'absolute'},
  innerWrap:{
    backgroundColor:theme.THEME_WHITE_COLOR, 
    height:hp(80), 
    borderTopLeftRadius:wp(7),
    borderTopRightRadius:wp(7)
  }
});

