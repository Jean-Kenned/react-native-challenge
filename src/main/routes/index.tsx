
import React from 'react'
import {
  makeHome
} from '@/main/factories/pages'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const RootStack = createStackNavigator()

const Routes = (): React.FC => {
  return (
    // eslint-disable-next-line react/no-children-prop
    <NavigationContainer children>
      <StatusBar backgroundColor="#38383860" />
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="Home" component={makeHome} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
