import React, {Component} from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DebitCard from '../screens/DebitCard';
import Profile from '../screens/Profile';
import Stack from './Stack';

import Home from '../assets/images/icons/Home.svg';
import LogoIcon from '../assets/images/logo/Logo.svg';
import CreditLogo from '../assets/images/icons/Credit.svg';
import Payments from '../assets/images/icons/Payments.svg';
import ProfileLogo from '../assets/images/icons/user.svg';
import CardLogo from '../assets/images/icons/Card.svg';
import Payment from '../screens/Payment';
import Credit from '../screens/Credit';
import { theme } from '../constants/theme';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      
      screenOptions={({ route }) => ({
       tabBarIcon: ({ focused, color, size }) => {
         if (route.name === 'Home') {
          return focused ?  <LogoIcon/>:<Home />;
         }else if(route.name === 'Payments'){
           return <Payments/>
         }else if(route.name === 'Debit Card'){
          return <CardLogo/>
        }else if(route.name === 'Credit'){
           return <CreditLogo/>
         }else if(route.name === 'Profile'){
          return <ProfileLogo/>
        }
       },
       tabBarActiveTintColor: theme.THEME_SUB_COLOR,
       tabBarInactiveTintColor: 'gray',
     })}
     >
    <Tab.Screen
      options={{
        headerShown: false,
      }} 
      name="Home" 
      component={Home} 
    />
    <Tab.Screen
      options={{
        headerShown: false,
      }} 
      name="Debit Card" 
      component={DebitCard} 
    />
     <Tab.Screen 
        options={{
            headerShown: false,
        }}
        name="Payments" 
        component={Home} 
    />
    <Tab.Screen 
      options={{
        headerShown: false,
      }}
      name="Credit" 
      component={Credit} 
    />
    <Tab.Screen 
      options={{
        headerShown: false,
      }}
      name="Profile" 
      component={Profile} 
    />
   </Tab.Navigator>
  )
}
export default TabNavigator;

