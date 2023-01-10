import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack =   createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App