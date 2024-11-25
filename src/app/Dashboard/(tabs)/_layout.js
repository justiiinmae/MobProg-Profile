import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const DashboardLayout = () => {
    return (
        <Tabs 
        screenOptions = {{ 
            headerShown: false,
            tabBarActiveTintColor: 'black', 
            tabBarInactiveTintColor: 'gray', 
        }}
        >
        <Tabs.Screen 
            name = 'index' 
            options={{
                title: 'Home',
                tabBarIcon: ({ focused, color, size }) => (
                  <MaterialCommunityIcons
                    name={focused ? 'home' : 'home-outline'}
                    color={color}
                    size={size}
                  />
                ),
              }}
            />

        <Tabs.Screen 
            name = 'Settings' 
            options={{
                title: 'Settings',
                tabBarIcon: ({ focused, color, size }) => (
                  <MaterialCommunityIcons
                    name={focused ? 'cog' : 'cog-outline'}
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
        </Tabs>

    
    );
}


export default DashboardLayout;
