import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
          tabBarActiveTintColor: '#77ABD9',
          tabBarInactiveTintColor: '#77ABD9',
        headerStyle: {
          backgroundColor: '#002A5C',
        },
        headerShadowVisible: false,
          headerTintColor: '#F2ECCE',
        tabBarStyle: {
          backgroundColor: '#002A5C',
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
      
    </Tabs>
  );
}

