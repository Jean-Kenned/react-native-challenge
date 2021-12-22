
import React from 'react'
import {
  makeHome,
  makeProduct
} from '@/main/factories/pages'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '@/main/routes/routes.types'

const RootStack = createStackNavigator<RootStackParamList>()

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
        <RootStack.Screen name="Product" component={makeProduct} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
