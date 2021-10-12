import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/homeScreen';
import DrawerContent from '../screens/Drawer/drawerContent';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default class AppNavigation extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}