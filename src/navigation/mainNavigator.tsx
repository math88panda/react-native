import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/* navigation stacks */
import LoginNavigator from './loginNavigator'

const MainStack = createStackNavigator()

export default () => (
  <NavigationContainer>
    <LoginNavigator />
  </NavigationContainer>
)


