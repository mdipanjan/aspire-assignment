
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        options={{
          headerShown: false,
        }}
        name="other" component={Home} 
      />
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen;