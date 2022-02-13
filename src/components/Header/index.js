import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../../constants/theme';
import Logo from '../../assets/images/logo/Logo.svg';


import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

function Header({
  navigation,
  hasBack,
  top
}) {
  return (
    <View style={[styles.header,{zIndex: top ? 100000: null}]}>
      <View>
        {hasBack && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={[styles.headerleft, {zIndex: top ? 100000: 1}]}>
            <AntDesign
              name="left"
              color={theme.THEME_WHITE_COLOR}
              style={{alignSelf: 'center'}}
              size={wp(4.5)}
              style={{alignSelf: 'flex-start', marginTop: wp(0)}}
            />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity>
        <Logo/>
      </TouchableOpacity>

   
     
    </View>
  );
}
export default Header;
