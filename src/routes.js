import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/screens/Home';
import ViewRepos from './components/screens/ViewRepos';


const Stack = createStackNavigator();

const Routes = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Stack.Screen name="ViewRepos" options={{ headerShown: false }} component={ViewRepos} />
    </Stack.Navigator>

  </NavigationContainer>
}

export default Routes;