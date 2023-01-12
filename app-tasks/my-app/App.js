import React from 'react';
import {Text, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack =   createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="HomeScreen" 
        component={HomeScreen}
        options={({navigation})=>({
        title: 'Task App',
        headerStyle: {backgroundColor: '#fff'},
        headerTitleStyle: {fontWeight: 'bold', color: '#000'},
        headerRight: () => (
          <Button 
            title='New'
            onPress={() => navigation.navigate('TaskFormScreen')}
          />
        

          ),
        })} />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App