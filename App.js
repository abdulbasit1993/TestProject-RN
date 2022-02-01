import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import Flexbox from './src/Screens/Flexbox';
import GoogleMapsScreen from './src/Screens/GoogleMapsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="GoogleMapsScreen"
          component={GoogleMapsScreen}
          options={{headerTitle: 'Google Maps Demo'}}
        />
        <Stack.Screen
          name="Flexbox"
          component={Flexbox}
          options={{headerTitle: 'Flexbox Demo'}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerTitle: 'Home Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
