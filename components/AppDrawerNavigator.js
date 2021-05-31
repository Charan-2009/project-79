import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './SideBarMenu';
import SettingScreen from '../Screens/SettingScreen';
import MyDonations from '../Screens/MyBarters';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,    
    }, 
    'My Barters':{
      screen: MyDonations,
    },  
    Setting: {
      screen: SettingScreen,
    },
    
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);
