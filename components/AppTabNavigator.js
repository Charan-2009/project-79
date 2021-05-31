import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../Screens/HomeScreen';
import DonateSomething from '../Screens/DonateSomething';
import RequestSomething from '../Screens/RequestSomething';
import Feedback from '../Screens/Feedback';

export const AppTabNavigator = createBottomTabNavigator({
   'Home' : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={{uri:'https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Home-icon.png'}} style={{width:40, height:40}}/>,
      tabBarLabel : "Home Screen",
    }
  },
  'Donate A Item' : {
    screen: DonateSomething,
    navigationOptions :{
      tabBarIcon : <Image source={{uri:'https://cdn3.iconfinder.com/data/icons/valentine-color-line-1/64/Gift-512.png'}} style={{width:40, height:40}}/>,
      tabBarLabel : "Donate A Book",
    }
  },
  'Request A Item': {
    screen: RequestSomething,
    navigationOptions :{
      tabBarIcon : <Image source={{uri:'https://www.openkm.com/resources/images/icon/document-management-big.png'}} style={{width:40, height:40}}/>,
      tabBarLabel : "Request A Book",
    }
  },
   'Feedback' : {
    screen: Feedback,
    navigationOptions :{
      tabBarIcon : <Image source={{uri:'http://pmru.kp.gov.pk/svg-icons/feedback.svg'}} style={{width:40, height:40}}/>,
      tabBarLabel : "Feedback",
    }
  },
});