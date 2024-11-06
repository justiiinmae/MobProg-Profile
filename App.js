import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Avatar from './src/Components/Avatar';
import Settings from './src/Components/Settings';
import DarkMode from './src/Components/Darkmode';
import Login from './src/LoginRegister/Login';
import Signup from './src/LoginRegister/Register';
import Password from './src/LoginRegister/Password';


const Stack = createStackNavigator();

function Home() {
  const { isDarkMode, toggleDarkMode } = DarkMode();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? '#2c2c2c' : '#fff' }}>
      <Avatar isDarkMode={isDarkMode} />
      <Settings isDarkMode={isDarkMode} toggleSwitch={toggleDarkMode} />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Signup} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="DarkMode" component={DarkMode} />
          <Stack.Screen name="Home" component={Home} /> 
          <Stack.Screen name="Password" component={Password} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
