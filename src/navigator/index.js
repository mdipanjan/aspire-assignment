import React, {Component} from 'react';
import TabNavigator from './Tab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SpendingLimit from '../screens/SpendingLimit';
const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen 
          options={{
            headerShown: false,
          }}
          name="Main" 
          component={TabNavigator} 
        />
        <MainStack.Screen 
          options={{
            headerShown: false,
          }}
          name="SpendingLimit" 
          component={SpendingLimit} 
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const AppContainer = () => {
  return (
    <MainStackNavigator/>
  );
};

export default AppContainer;
