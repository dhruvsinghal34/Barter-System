import React from 'react';
import { View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import AppHeader from './components/AppHeader'
import Welcome from './screen/welcome'
import {AppTabNavigator} from './components/AppTabNavigator'

export default class App extends React.Component{
  render(){
    return (
      <View>
        <AppHeader></AppHeader>
        <AppContainer></AppContainer>
      </View>
    );
  }
  }

const switchNavigator  = createSwitchNavigator({
  welcomeScreen:{screen:Welcome},
  BottomTab:{screen:AppTabNavigator}
})
const AppContainer = createAppContainer(switchNavigator)
  